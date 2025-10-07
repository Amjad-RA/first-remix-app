export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4 w-2xl pt-4">
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