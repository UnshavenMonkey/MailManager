import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {
    addMail,
    selectAdress,
    selectAuthor,
    selectDateComplete,
    selectDateToComplete, selectFile, selectIsPerson,
    selectResponsiblePerson, setAdress, setAuthor, setResponsiblePerson
} from "./MailSlice";

export function Mail() {
    const dispatch = useDispatch();
    const author = useSelector(selectAuthor);
    const adress = useSelector(selectAdress);
    const dateComplete = useSelector(selectDateComplete);
    const dateToComplete = useSelector(selectDateToComplete);
    const responsiblePerson = useSelector(selectResponsiblePerson);
    const file = useSelector(selectFile);
    const isPerson = useSelector(selectIsPerson);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addMail({
            author, address: adress, dateComplete: new Date(), dateToComplete: new Date(), responsiblePerson, isPerson: true, file}));
    };

    return (
        <Form className="w-50 mx-auto mt-5" onSubmit={(e) => handleSubmit(e)}>
            <div className='my-3 text-center'>Создание обращения</div>
            <Form.Group className="mb-3" controlId="author">
                <Form.Label>Автор обращения</Form.Label>
                <Form.Control type="text" name="author" onChange={(e) => dispatch(setAuthor(e.target.value))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="adress">
                <Form.Label>Адрес</Form.Label>
                <Form.Control type="text" name="adress" onChange={(e) => dispatch(setAdress(e.target.value))}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="responsiblePerson">
                <Form.Label>Ответственный исполнитель</Form.Label>
                <Form.Control type="text" name="responsiblePerson" onChange={(e) => dispatch(setResponsiblePerson(e.target.value))} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Создать обращение
            </Button>
        </Form>
    );
}
