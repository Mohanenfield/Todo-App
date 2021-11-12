import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({ modal, toggle, save }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == "title") {
            setTitle(value);
        } else if (name == "description") {
            setDescription(value);
        } else {
            setName(value);
        }
    }

    const handleSave = () => {
        let taskObj = {};
        taskObj["Title"] = title
        taskObj["Description"] = description
        taskObj["Name"] = name
        save(taskObj);


    }

    return (

        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>

                <div className="form-group">
                    <label>Title of the action item</label>
                    <input type="text" className="form-control" name="title" value={title} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea rows="5" className="form-control" name="description" value={description} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label>Name of the Person Assigned</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={handleChange} />
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;