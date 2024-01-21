export default function Message({ message }: { message: string }) {
  return (
    <div className="w-5 h-10 absolute left-36 top-1">
      <h1>{message}</h1>
    </div>
  );
}
