import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "../App";
import{ v4 as uuidV4 } from "uuid"

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tags: Tag) => void
  availableTags: Tag[]
} &  Partial <NoteData>

export const NoteForm = ({ 
  onSubmit,
   onAddTag, 
   availableTags,
   title= "",
   markdown = "",
   tags= [],

  }:
   NoteFormProps) => {

  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
  const  navigate = useNavigate()

  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
      createdAt:new Date()
    });
     navigate ("..")
  }; 
  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>title</Form.Label>
              <Form.Control ref={titleRef} required  defaultValue={title}/>
            </Form.Group>
          </Col>
          <Col>  
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
              onCreateOption={label => {
                const newTag = {id: uuidV4(), label}
                onAddTag(newTag)
                setSelectedTags(prev => [...prev, newTag])
              }}
                value={selectedTags.map(tag => {
                  return { label: tag.label, id: tag.id,value:tag.value }
                })}


                options={availableTags.map(tag => {
                    return{label: tag.label, id: tag.id, value:tag.value} 
                })}

                onChange={tags => {
                  setSelectedTags(
                    tags.map(tag => {
                      return { label: tag.label, id: tag.id,value:tag.value }
                    })
                  )
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown" className="textbody">
          <h3>Body</h3>
          
          <Form.Control ref={markdownRef} defaultValue={markdown} 
          required as = 'textarea' rows={5} placeholder="Enter text here..." />
        </Form.Group>
        <Stack  gap={2} direction="horizontal">
          <Button type="submit" variant="outline-primary">
            save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
