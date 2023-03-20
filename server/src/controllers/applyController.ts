import Applicant from "../models/applicant.model";

const createApply = async (req: any, res: any) => {
  try {
    const { name, email } = req.body;
    const existingApply = await Applicant.findOne({ name });

    if (existingApply) {
      return res.status(400).json({
        msg: 'Apply already exists',
      });
    }

    const apply = new Applicant({
      name,
      email,
    });

    await apply.save();

    res.json({
      message: 'Success',
    })} 
    
    catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};
export default { createApply };
