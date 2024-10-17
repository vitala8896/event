export interface EventFormData {
    name?: string;
    status?: "upcoming" | "completed" | "cancelled";
    date?: Date; 
    description?: string;
    category?: "work" | "personal" | "leisure";
  }
  
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (eventData: Event) => void; 
    initialData?: Event | null;
    children?: React.ReactNode;
}    

export interface Event {
    id: string;
    name: string;
    description: string;
    category: 'work' | 'personal' | 'leisure';
    date: string;
    status: 'upcoming' | 'completed' | 'cancelled';
}

export type EventCategory = 'work' | 'personal' | 'leisure';
export type EventStatus = 'upcoming' | 'completed' | 'cancelled';