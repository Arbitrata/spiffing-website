// eslint-disable-next-line react/prop-types
export default function FeedCard({ image, name, key }) {
  return (
    <div key={key} className="w-auto h-[60px] p-2 relative">
      <img className="w-full h-full object-cover" src={image} alt={name} />
    </div>
  );
}
