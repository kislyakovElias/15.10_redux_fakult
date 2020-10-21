import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Modal, Button, ModalBody, ModalFooter, ModalHeader,
    Label, Input , } from 'reactstrap';


function Controller(props) {

    const [enable, setEnable] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const [statusInput, setStatusInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    const toggle = () => {setEnable(!enable) }



    const createButtonHandler = () => {
        const input = {status:statusInput, name:nameInput, description:descriptionInput, priority: 1};
        props.createCard(input);
        toggle();
        setNameInput('');
        setStatusInput('')
        setDescriptionInput('');
    }


    return (
        <div>
            <Button color="danger" onClick={toggle}>Task Add 🏄‍♂️🏄‍♀️</Button>
            <Modal isOpen={enable} toggle={toggle} >
                <ModalHeader toggle={toggle}><span>🏝️</span> Fill the form </ModalHeader>
                <ModalBody>
                    <Label >Name: </Label>{' '}
                    <Input type="text" placeholder="input Name here" value={nameInput} onChange={event => setNameInput(event.target.value)} />
                    <Label >Status: </Label>{' '}
                    <Input type="select" value={statusInput} onChange={event => setStatusInput(event.target.value)}>
                        <option selected value='todo'>To do</option>
                        <option value='progress'>In progress</option>
                        <option value='review'>Review</option>
                        {/*selected={true} defaultValue='review' */}
                        <option value='done'>Done</option>
                    </Input>
                    <Label >Description: </Label>{' '}
                        <Input type="text" placeholder="input Description here" value={descriptionInput} onChange={event => setDescriptionInput(event.target.value)} />




                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={createButtonHandler}>Create new task <span>🐶</span></Button>{' '}
                    <Button color="secondary" onClick={toggle}> <span>🐍</span> Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};














export default Controller;
