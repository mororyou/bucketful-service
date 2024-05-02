type ErrorLabelsProps = Readonly<{
  errors: string[];
}>;

export default function ErrorLabels({ errors }: ErrorLabelsProps) {
  return (
    <div className="mt-1 flex flex-col space-y-1">
      {errors.map((error, index) => (
        <span key={index} className="text-xs font-semibold text-red-400">
          {error}
        </span>
      ))}
    </div>
  );
}
