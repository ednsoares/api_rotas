import mongoose from "mongoose"


async function conectaDb(){
  await mongoose.connect
  ("mongodb+srv://ednsoares:gKfb5flhH0XvfkB5@cluster0.sex9ubp.mongodb.net/?retryWrites=true&w=majority")
}


export default conectaDb