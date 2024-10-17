import * as Yup from 'yup';

export const eventSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().oneOf(['work', 'personal', 'leisure']).required('Category is required'),
  date: Yup.date().min(new Date(), 'Date must be in the future').required('Date is required'), 
  status: Yup.string().oneOf(['upcoming', 'completed', 'cancelled']).required('Status is required'),
});
