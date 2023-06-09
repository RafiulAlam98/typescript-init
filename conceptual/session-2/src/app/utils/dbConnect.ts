import mongoose from "mongoose"
import { log } from "./logger"
const {URI} = process.env

const dbConnect = async ():Promise<void> =>{
  try {
    if(!URI){
      log.error("No URI found in the file")
      process.exit(1)
    }
    await mongoose.connect(URI).then(()=>log.info(`Database connected`))
  } catch (error:any) {
    log.error(error.message)
  }
}

export { dbConnect }

