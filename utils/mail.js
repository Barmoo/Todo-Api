import { createTransport } from "nodemailer";

export const mailTransporter = createTransport({
    host:"smpt.gmail.com",
    port:0,
    secure: false,
    auth:{
        user:"armoobelinda1@gmail.com",
        pass:"uiooo455"
    }

});