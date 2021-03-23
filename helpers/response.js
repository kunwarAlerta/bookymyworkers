const sendRender = async (req,res,template,title,success,data) => {
  try {
    return res.render(template ,{ title ,success , user:req.session.user,error:"",data } )
  } catch (error) {
    throw error;
  }
};

const sendRes = async (req, res, code, message, data) => {
  try {
    return res.status(code).send({
      code: code,
      status: "Success",
      message: message,
      data: data,
    });
  } catch (error) {
    throw error;
  }
};


module.exports ={ sendRender,sendRes};
