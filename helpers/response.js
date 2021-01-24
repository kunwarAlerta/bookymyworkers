const sendRender = async (req,res,template,title,success,data) => {
  try {
    console.log(data)
    return res.render(template ,{ title ,success , user:req.session.user,error:"",servicedata:data } )
  } catch (error) {
    throw error;
  }
};

module.exports = sendRender;
