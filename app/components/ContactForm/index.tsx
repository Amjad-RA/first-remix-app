export default function ContactForm() {

  const validateForm = (data: FormData) => {
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      errors.name = "Name is required";
    }
    if (!email || typeof email !== "string" || email.trim().length === 0) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      errors.message = "Message is required";
    }
    return errors;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      alert(JSON.stringify(errors, null, 2));
      return;
    }
    alert("Form submitted!");
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-2xl pt-4">
      <label>
        Name
        <input type="text" name="name" className="border rounded p-2 w-full" />
      </label>
      <label>
        Email
        <input type="email" name="email" className="border rounded p-2 w-full" />
      </label>
      <label>
        Message
        <textarea name="message" className="border rounded p-2 w-full"></textarea>
      </label>
      <button type="submit" className="bg-gray-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}