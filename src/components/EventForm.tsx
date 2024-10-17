import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { eventSchema } from '../hooks/useFormValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { EventFormData } from '../types';

interface EventFormProps {
  onSubmit: (data: EventFormData) => void;
  defaultValues?: EventFormData;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit, defaultValues }) => {
  const { control, handleSubmit } = useForm<EventFormData>({
    resolver: yupResolver(eventSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => <input {...field} placeholder="Event Name" />}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => <input {...field} placeholder="Description" />}
      />
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="leisure">Leisure</option>
          </select>
        )}
      />
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <input
            type="date"
            value={field.value ? field.value.toISOString().split('T')[0] : ''}
            onChange={(e) => field.onChange(new Date(e.target.value))}
          />
        )}
      />
      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
