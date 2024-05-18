import express from 'express';
const router = express.Router();
import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'

/*****************************
todos -index
******************************/
router.post('/send_post', async function(req: any, res: any) {
  const retObj = {ret: "NG", data:{}, message: ""};
  try {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
//console.log(req.body);
    const input_text = req.body.input_text;	
console.log("input_text=", input_text);
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(input_text);
    const response = await result.response;
    const text = response.text();
    console.log(text);
/*
    */
    retObj.ret = "OK";
    retObj.data = text;
    return res.json(retObj);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default router;
//@ts-ignore
