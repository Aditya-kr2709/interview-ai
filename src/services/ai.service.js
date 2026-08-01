const {GoogleGenAI} = require("@google/genai")
const {z} = require("zod")
const {zodtoschema, default: zodToJsonSchema} = require("zod-to-json-schema")

const ai = new GoogleGenAI({
    apiKey : process.env.GOOGLE_GENAI_API_KEY
}) 


const interviewReportSchema = z.object({
    matchScore: z.number().describe("A score between 0 to 100 indicating how well the candidate's profile matches the job describe"),
    technicalQuestions : z.array(z.object({
        question: z.string().describe("the technical question can be ask in the interview"),
        intention : z.string().describe("the intention of interviewer behind asking this question"),
        answer: z.string().describe("how to answer this question,what points to cover,what approach to take etc."),
    })).describe("technical question that can be asked in the interview along with their intention how to answer them"),
    behavioralQuestions:z.array(z.object({
        question: z.string().describe("the technical question can be ask in the interview"),
        intention : z.string().describe("the intention of interviewer behind asking this question"),
        answer: z.string().describe("how to answer this question,what points to cover,what approach to take etc."),
    })).describe("behavioral question that can be asked in the interview along with their intention how to answer them"),
    skillGaps:z.array(z.object({
        skill:z.string().describe("the skill that candidate is lacking"),
        severity:z.enum(["low","medium","high"]).describe("the severity of skill gap"),
    })).describe("list of skill gaps in candidate profile along with their severity"),
    preparationPlan:z.array(z.object({
    day: z.number().describe("the day number in the preperation plan,starting from starting from 1"),
    focus:z.string().describe("the main focus of this day in the preperation plan,eg data structures,system design,mock interviews etc"),
    task:z.array(z.string()).describe("list of task to be done on this day to follow the preperation plan,eg read a specific book")
   })).describe("A day-wise preperation plan for the candidate to follow in order to prepare for the interview effectively")
})
async function genenrateInterviewReport({resume,selfDescription,jobDescription}){
const prompt = `
Return ONLY valid JSON.

For skillGaps, use EXACT format:

"skillGaps": [
  {
    "skill": "React.js",
    "severity": "high"
  }
]

Do NOT return strings like:
"React.js (High Severity)"

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}
`
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config:{
        responseMimeType:"application/json",
        responseSchema: zodToJsonSchema(interviewReportSchema)

    }
  })
  
  return JSON.parse(response.text)




}

 module.exports = genenrateInterviewReport