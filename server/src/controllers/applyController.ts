import Applicant from "../models/applicant.model";
import validationMongoId from '../helper/validationMongoId'

const fetchAllApply = async (req: any, res: any) => {
  try {
    const apply = await Applicant.find();

    if (!apply) {
      res.status(404).json({
        message: 'Not Found',
      });
    }

    res.json({
      message: 'Success Get All',
      data: apply,
    })}

    catch (error: any) {
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
        message: 'Id is valid',
      });
    }

    const apply = await Applicant.findById(id);

    if (!apply) {
      res.status(404).json({
        message: 'Not Found',
      });
    }

    res.json({
      message: 'Success',
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
    const { resumeLink, coverLetter, dob } = req.body;

    const { 
      fname, 
      lname, 
      headline, 
      phone, 
      address, 
      email
    } = applicationBody.personal

    const { 
      school, 
      foStudy, 
      degree, 
      startDate, 
      endDate
    } = applicationBody.education

    const { 
      title, 
      company, 
      industry, 
      summary, 
      sDate, 
      eDate,
      workHere
    } = applicationBody.experience
    
    // kiem tra mail va link job da ton tai chua
    const existingResume = await Applicant.findOne( {resumeLink} );
    const existingEmail = await Applicant.findOne( { "personal.email": applicationBody.personal.email } );
    
    if (existingResume && existingEmail) {
      return res.status(400).json({
        msg: 'Applications exists',
      });
    }

    const apply = new Applicant({
      personal: {
        fname, 
        lname, 
        headline, 
        phone, 
        address, 
        email
      },
      education: {
        school,
        foStudy, 
        degree, 
        startDate, 
        endDate
      },
      experience: {
        title,
        company,
        industry,
        summary,
        sDate,
        eDate,
        workHere
      },
      resumeLink,
      coverLetter,
      dob
    });

    await apply.save();

    res.json({
      message: 'Success Upload',
    })} 
    
    catch (error: any) {
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
        message: 'Id is valid',
      });
    }

    await Applicant.findByIdAndDelete(id);

    res.json({
      message: 'Success',
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

export default { fetchAllApply, fetchApply, createApply, deleteApply };