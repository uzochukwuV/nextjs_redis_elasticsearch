import { FormEvent } from "react";

export default function CarForm(){
    const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form =new FormData(event.target as HTMLFormElement);
        const formData = Object.fromEntries(form.entries());

        const res =await fetch('api/cars', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',

            },
            method: 'POST',

        });
        const result = await res.json()
        console.log(result)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="make" />
            <input type="text" name="model" />
            <input type="text" name="image" />
            <textarea name="description" id="" ></textarea>
            <button type="submit">Create Car</button>
        </form>
    )
}