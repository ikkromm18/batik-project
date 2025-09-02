import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaStar, FaSmile, FaMeh, FaFrown, FaQrcode } from "react-icons/fa";

export default function Feedback() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:8000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, rating }),
      });

      if (!res.ok) throw new Error("Gagal mengirim feedback");

      setMessage("✅ Feedback berhasil dikirim, terima kasih!");
      reset();
      setRating(0);
    } catch (err) {
      setMessage("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[url('/images/bg-about.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full transition-all duration-300 hover:shadow-xl">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-amber-800 mb-2">
            Rating Your Experience
          </h3>
          <p className="text-amber-600">
            Enjoyed Your Visit? Share Your Experience with our Batik Instagram
            Filter!
          </p>
        </div>

        {/* QR Code dengan animasi */}
        <div className="mx-auto w-40 mb-6 transform transition-transform duration-500 hover:scale-105">
          <div className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center">
            <FaQrcode className="text-amber-700 text-2xl mb-1" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
              alt="qr-code"
              className="border-2 border-amber-300 rounded"
            />
            <p className="text-xs text-amber-600 mt-1">
              Scan untuk filter Instagram
            </p>
          </div>
        </div>

        {/* Form Feedback */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-5">
          {/* Pertanyaan 1 dengan ikon */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-amber-800 mb-2">
              Did You Enjoy Learning About Batik?
            </label>
            <div className="flex justify-between">
              {[
                { value: "Yes", icon: FaSmile, color: "text-green-500" },
                { value: "So-so", icon: FaMeh, color: "text-yellow-500" },
                { value: "No", icon: FaFrown, color: "text-red-500" },
              ].map((opt) => {
                const Icon = opt.icon;
                return (
                  <label
                    key={opt.value}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={opt.value}
                      {...register("q1", {
                        required: "Pertanyaan 1 wajib diisi",
                      })}
                      className="hidden"
                    />
                    <div
                      className={`p-3 rounded-full border-2 border-gray-300 transition-all duration-200 
                      ${errors.q1 ? "border-red-500" : ""}
                      hover:scale-110 hover:shadow-md
                      flex items-center justify-center`}
                    >
                      <Icon className={`text-2xl ${opt.color}`} />
                    </div>
                    <span className="mt-1 text-sm text-amber-700">
                      {opt.value}
                    </span>
                  </label>
                );
              })}
            </div>
            {errors.q1 && (
              <p className="text-red-500 text-sm mt-1">{errors.q1.message}</p>
            )}
          </div>

          {/* Pertanyaan 2 dengan checkbox yang lebih menarik */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-amber-800 mb-2">
              What was your favorite part?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Membatik activity",
                "Photo Frame",
                "Motifs Gallery",
                "Info Pages",
                "Video",
              ].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center bg-amber-50 p-2 rounded-lg transition-colors duration-200 hover:bg-amber-100 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={opt}
                    {...register("q2", {
                      required: "Pertanyaan 2 wajib diisi",
                    })}
                    className="mr-2 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm text-amber-700">{opt}</span>
                </label>
              ))}
            </div>
            {errors.q2 && (
              <p className="text-red-500 text-sm mt-1">{errors.q2.message}</p>
            )}
          </div>

          {/* Pertanyaan 3 dengan textarea yang lebih menarik */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-amber-800 mb-2">
              Do you have any thoughts you'd like to share?
            </label>
            <textarea
              placeholder="Tuliskan pendapatmu di sini..."
              {...register("q3")}
              className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
              rows={3}
            ></textarea>
          </div>

          {/* Rating dengan animasi */}
          <div className="mb-6 text-center">
            <p className="mb-3 font-medium text-amber-800">
              Rate your overall experience:
            </p>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={32}
                  className={`cursor-pointer transition-all duration-200 ${
                    star <= (hover || rating)
                      ? "text-yellow-400 transform scale-110 drop-shadow-lg"
                      : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                />
              ))}
            </div>
            <p className="text-sm text-amber-600 mt-2">
              {rating > 0
                ? `You rated: ${rating} star${rating > 1 ? "s" : ""}`
                : "Click to rate"}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Mengirim...
              </>
            ) : (
              "Kirim Feedback"
            )}
          </button>

          {message && (
            <div
              className={`mt-4 p-3 rounded-lg text-center ${
                message.includes("✅")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
