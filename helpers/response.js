const sendRender = async (req,res,template,title,success,data) => {
  try {
    return res.render(template ,{ title ,success , user:req.session.user,error:"",data } )
  } catch (error) {
    throw error;
  }
};

module.exports = sendRender;
