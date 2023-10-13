import axios from "axios";
import themes from "../data";

const baseURL = 'https://generativelanguage.googleapis.com/v1beta3/{model=tunedModels/*}:generateText'

export function aiRequest(message){
 //metadados para a ai
 const data ={
  prompt: `${message}`,
  temperature: 0.2,
  max_tokens: 3000,
  top_p: 1,
  frequencey_penalty: 0.5,
  presence_penalty: 0,
 }
 return axios.post(baseURL, data, {
  headers:{
   Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
  },
 })
}