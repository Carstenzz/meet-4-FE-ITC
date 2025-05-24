import Button from "../component/button/Button.jsx";
import Card from "../component/card/Card.jsx";

function HomePage() {
	const user = "Fufufafa";
    const listKota = ["Yogya", "Jakarta", "Bandung"];
    const makananFavorit = "Pisang goreng";

	return (
		<>
			<h1>Hello, {user ? user : "World!"}</h1>
            {makananFavorit && <p>Makanan favoritnya adalah {makananFavorit}</p>}
            {
                listKota.map(
                    (kota)=>(<p className="kota">{kota} indah</p>)
                )
            }
			<Button />
            <Card nama="budi" asal="Yogya" pekerjaan="Pengangguran"/>
            <Card nama="anton" asal="kurang tau" pekerjaan="pria misterius"/>
            <Card nama="fufufafa" asal="istana negara" pekerjaan="mencaci maki owo"/>
		</>
	);
}

export default HomePage;
