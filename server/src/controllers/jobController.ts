import Job from '../models/jobs.model';
import validationMongoId from '../helper/validationMongoId'

const fetchAllJob = async (req: any, res: any) => {
  try {
    const jobs = await Job.find();

    if (!jobs) {
      res.status(404).json({
        message: 'Not Found',
      });
    }

    res.json({
      message: 'Success Get All',
      data: jobs,
    })}

    catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const fetchJob = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const isValid = validationMongoId(id);

    if (!isValid) {
      res.status(404).json({
        message: 'Job is valid',
      });
    }

    const job = await Job.findById(id);

    if (!job) {
      res.status(404).json({
        message: 'Not Found',
      });
    }

    res.json({
      message: 'Success Get An Job',
      data: job,
    })} 
    catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const createJob = async (req: any, res: any) => {

  try {
    const { 
        title,
        location,
        tags,
        created_at,
        updated_at,
        available,
        descriptions: {
            title: titleDescriptions,
            description,
        },
        requirements,                                                                                                               
      } = req.body;

    // kiem tra mail va link job da ton tai chua
    const existingTitle = await Job.findOne( { title } );

    if (existingTitle) {
      return res.status(400).json({
        msg: 'Applications exists',
      });
    }

    const job = new Job({
        title,
        location,
        tags,
        created_at,
        updated_at,
        available,
        descriptions: {
          titleDescriptions,
            description,
        },
        requirements,
    });

    await job.save();

    res.json({
      message: 'Success Upload',
    })} 
    
    catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const updateJob = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;

    const isValid = validationMongoId(id);

    if (!isValid) {
      res.status(404).json({
        message: 'Job is valid',
      });
    }
    const existingUser = await Job.findById(id);

    if (!existingUser) {
      return res.status(400).json({
        msg: 'Job not exists',
      });
    }

    await Job.findByIdAndUpdate(id, {
      username,
      email,
    });

    res.json({
      message: 'Success Update Job',
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const deleteJob = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const isValid = validationMongoId(id);
    if (!isValid) {
      res.status(404).json({
        message: 'Job is valid',
      });
    }

    await Job.findByIdAndDelete(id);

    res.json({
      message: 'Success Delete Job',
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

export default { fetchAllJob, fetchJob, createJob, updateJob, deleteJob };