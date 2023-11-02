
import { NoteData, Tag } from "../App";
import NoteForm from "./NoteForm";

type NewNoteProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tags: Tag) => void
    availableTags: Tag[]
}

export const NewNote = ({onSubmit, onAddTag, availableTags}: NewNoteProps) => {
   

  return (
    <>
    <h1 className="mb-4">NEW NOTE</h1>
    <NoteForm onSubmit={onSubmit} onAddTag = {onAddTag} availableTags = {availableTags}/>
    </>
  );
};

export default NewNote;
