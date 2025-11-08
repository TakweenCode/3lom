import { LucideIcon } from 'lucide-react';

export interface FlashcardData {
  id: number;
  frontText: string;
  backText: string;
  FrontIcon: LucideIcon;
  BackIcon: LucideIcon;
}

export interface QuestionOption {
  id: number;
  text: string;
  Icon: LucideIcon;
  isCorrect: boolean;
}

export interface QuestionData {
  id: number;
  questionText: string;
  options: QuestionOption[];
}

export enum SectionType {
  CLASSROOM = 'classroom',
  PLAYGROUND = 'playground',
  COMMON_AREAS = 'common_areas',
}

export interface SectionData {
  id: SectionType;
  title: string;
  description: string;
  MainIcon: LucideIcon;
  themeColor: string; // Tailwind color class base (e.g., 'kid-green')
  flashcards: FlashcardData[];
  questions: QuestionData[];
}

export type AppView = 'home' | SectionType;