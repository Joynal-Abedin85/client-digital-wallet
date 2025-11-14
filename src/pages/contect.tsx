
const contect = () => {
    return (
            <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded"
        />

        <textarea
          placeholder="Your Message"
          className="w-full border px-4 py-2 rounded h-32"
        ></textarea>

        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>

    );
};

export default contect;