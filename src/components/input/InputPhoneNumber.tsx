export default function InputPhoneNumber({label}: {label: string}) {
  return (
    <div>
      {" "}
      <label className="label pl-0 mt-2">
        <span className="label-text">
          {label} <span className="text-primary">*</span>
        </span>
      </label>
      <input type="number" className="input input-bordered w-full" />
    </div>
  );
}
