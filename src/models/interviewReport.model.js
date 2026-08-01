const mongoose  = require('mongoose');


/**
 * job describe schema:string
 * resume text:string
 * self describe
 * 
 * matchscore: number
 * technical question : [{
 *       question: "",
 *       intention: "",
 *       answer : "",
 * }]
 * behavioral question : [{
 *  question: "",
 *       intention: "",
 *       answer : "",
 * }]
 * 
 * }]
 * skill gaps : [{
 * skill:
 * severity
 * type
 * enum
 * 
 * }]
 * preperation plan : [{ 
 * day: num
 * focus: string,
 * tasks: [ string]
 * 
 * }]
 */


const technicalQuestionSchema = new mongoose.Schema({
  question:{
    type:String,
    required:[true,"question is required"]
  },
  intention:{
    type:String,
    required:[true,"intention is required"]
  },
  
  answer : {
     type:String,
     required:[true,"answer is required"]
  }
},{
    _id:false
})


const behavioralQuestionSchema = new mongoose.Schema({
    question:{
    type:String,
    required:[true,"question is required"]
  },
  intention:{
    type:String,
    required:[true,"intention is required"]
  },
  
  answer : {
     type:String,
     required:[true,"answer is required"]
  }
},{
    _id:false
})

const skillGapSchema = new mongoose.Schema({
   skill:{
    type:String,
    required:[true,"skill is required"]
   } ,
   severity:{
    type:String,
    enum: ["low","medium","high"],
    required:[true,"severity is required"]
   }

})


const preperationPlanSchema = new mongoose.Schema({
    day:{
        type:Number,
        required:[true,"day is required"]
    },
    focus:{
        type: String,
        required:[true,"focus is required"]
    },
    tasks:[{
        type:String,
        required:[true,"task is required"]
    }]
})
const  interviewReportSchema = new mongoose.Schema({

    jobDescription:{
        type: String,
        required:[true,"job describe is required"]
    },

    resume:{
        type: String,
   },
   selfDescription:{
    type: String,
    
   },
   matchScore:{
    type: Number,
    min: 0 ,
    max:100
   },
   
   technicalQuestions:[technicalQuestionSchema],
   behavioralQuestions:[behavioralQuestionSchema],
   skillGaps:[skillGapSchema],
   preparationPlan:[preperationPlanSchema],
   user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
   }
},{
    timestamps:true
})

const interviewReportModel = mongoose.model("InterviewReport",interviewReportSchema);
module.exports = interviewReportModel;