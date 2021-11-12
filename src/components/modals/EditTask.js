import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');

    const handleChange = (e) => {

        const { name, value } = e.target

        if (name == "title") {
            setTitle(value);
        } else if (name == "description") {
            setDescription(value);
        } else {
            setName(value);
        }


    }

    useEffect(() => {
        setTitle(taskObj.Title)
        setDescription(taskObj.Description)
        setName(taskObj.Name)
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Title'] = title
        tempObj['Description'] = description
        tempObj['Name'] = name
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>

                <div className="form-group">
                    <label>Title for action item</label>
                    <input type="text" className="form-control" value={title} onChange={handleChange} name="title" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description"></textarea>
                </div>

                <div className="form-group">
                    <label>Name of the person</label>
                    <input type="text" className="form-control" value={name} onChange={handleChange} name="name" />
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTaskPopup;