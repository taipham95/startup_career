import Applicant from "../models/applicant.model";
import validationMongoId from "../helper/validationMongoId";

const fetchAllApply = async (req: any, res: any) => {
  try {
    const apply = await Applicant.find();

    if (!apply) {
      res.status(404).json({
        message: "Not Found",
      });
    }

    res.json({
      message: "Success Get All",
      data: apply,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const fetchApply = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const isValid = validationMongoId(id);

    if (!isValid) {
      res.status(404).json({
        message: "Application not valid",
      });
    }

    const apply = await Applicant.findById(id);

    if (!apply) {
      res.status(404).json({
        message: "Not Found",
      });
    }

    res.json({
      message: "Success Get An Application",
      data: apply,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const createApply = async (req: any, res: any) => {
  try {
    const applicationBody = req.body;

    // kiem tra mail va link job da ton tai chua
    const existingResume = await Applicant.findOne({
      "profile.resumeLink": applicationBody.profile.resumeLink,
    });
    const existingEmail = await Applicant.findOne({
      "personal.email": applicationBody.personal.email,
    });

    if (existingResume && existingEmail) {
      return res.status(400).json({
        message: "Applications exists",
      });
    }

    const apply = new Applicant(req.body);

    await apply.save();

    res.json({
<<<<<<< HEAD
      message: 'Success Create New Application',
    })} 
    
    catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const updateApply= async (req:any, res:any)=>{

  try {

    const { id } = req.params;

    const isValid = validationMongoId(id);

    if(!isValid){
      res.status(404).json({
        message:"Apply is valid",
      })
    }
    
    const existingApply= await Applicant.findById(id)

    if(!existingApply){
      return res.status(404).json({
         message:"Apply not exists",
      })
    }

    await Applicant.findByIdAndUpdate(id,req.body);

    res.json({
      message: 'Success Update Application',
    });
  } catch (error:any){
    res.status(400).json({
      message: error.toString(),
    })
  }
}


const deleteApply = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const isValid = validationMongoId(id);
    if (!isValid) {
      res.status(404).json({
        message: 'Application is valid',
      });
    }

    await Applicant.findByIdAndDelete(id);

    res.json({
      message: 'Success Delete Application',
=======
      message: "Success Create New Application",
>>>>>>> d91e5f34a10c129588e3e272e561a922c194fc56
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const updateApply = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const isValid = validationMongoId(id);

    if (!isValid) {
      res.status(404).json({
        message: "Apply not valid",
      });
    }

    const existingApply = await Applicant.findById(id);

    if (!existingApply) {
      return res.status(404).json({
        message: "Apply not exists",
      });
    }

    await Applicant.findByIdAndUpdate(id, req.body);
    const newDataApply = await Applicant.find();

    res.json({
      message: "Success Update Apply",
      newData: newDataApply,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const deleteApply = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const isValid = validationMongoId(id);
    if (!isValid) {
      res.status(404).json({
        message: "Application not valid",
      });
    }

    await Applicant.findByIdAndDelete(id);
    const newDataApply = await Applicant.find();

    res.json({
      message: "Success Delete Application",
      newData: newDataApply,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

export default {
  fetchAllApply,
  fetchApply,
  createApply,
  updateApply,
  deleteApply,
};
