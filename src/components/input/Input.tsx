export default function Input({label, type}: {label: string, type: string}) {
  return (
    <div>
      <label className="label pl-0">
        <span className="label-text">
          {label} <span className="text-primary">*</span>
        </span>
      </label>
      <input type={type} className="input input-bordered w-full" />
    </div>
  );
}
