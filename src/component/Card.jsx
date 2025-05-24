import "./Card.css";

const Card = ({nama, asal, pekerjaan}) => {
	return (
		<div className="card">
			<p>Nama : {nama}</p>
			<p>Asal : {asal}</p>
			<p>pekerjaan : {pekerjaan}</p>
		</div>
	);
};

export default Card;
