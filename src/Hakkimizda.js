import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import ReactTooltip from 'react-tooltip'
import { Link } from 'react-router-dom';

const Hakkimizda = () => (
	<Styles>
		<div>
			<h2 className="header-top">Ekibimiz</h2>
			<p>DEUCYBER Ekibi, siber güvenlik alanıyla ilgilenen birkaç Bilgisayar Bilimleri öğrencisinin bir araya gelmesiyle oluşmuştur.</p>
			<h2 className="header">Hedefimiz</h2>
			<p>Temel hedefimiz Dokuz Eylül Üniversitesinde siber güvenlik alanıyla ilgili bir etkileşim/tartışma ortamı yaratmaktır. Bu hedef doğrultusunda ilk adımımızı resmi bir topluluk haline gelmek olarak belirledik. Resmileşmemizin ardından 2020-2021 öğretim yılı itibariyle faaliyetlerimize başlamayı planlıyoruz.</p>
			<h2 className="header">Etkinlikler</h2>
			<p>İlk etapta düzenleyeceğimiz temel etkinlikler şunlar:</p>
			<ul>
				<li>Yetkin üyelerin üstleneceği giriş seviyesi eğitimler</li>
				<li>Sektörden saygın kişilerin bilgisini aktarabileceği eğitimler/konferanslar</li>
				<li>Üniversite/Topluluk içi ve dışı <a className="tool-tip" data-tip="Capture The Flag: Bayrağı Yakala; siber güvenlik alanında düzenlenen uygulamalı ve öğretici yarışma.">CTF</a> yarışmaları</li>
				<li><a className="tool-tip" data-tip="Bilim, teknoloji, sanat vb. konularda ortak ilgi alanlarına sahip kişilerin sosyalleşebileceği, tartışabileceği, proje ve çalışmalarını yürütebileceği atölye ortamı. (bkz. Makerspace)">Hackerspace</a></li>
				<ReactTooltip />
			</ul>
			<p>Bu etkinliklerin dışında hayata geçirmeyi planladığımız daha bir çok etkinlik ve proje mevcut. Aktif bilgi paylaşımı ve fikir üretimi sayesinde Üniversitemizdeki siber güvenlik alanındaki boşluğu kapatabileceğimize inanıyoruz.</p>
			<p>Amaçlarımıza ulaşabilmek için bizimle aynı vizyona sahip üyelere ihtiyacımız var. Bilim veya teknolojinin herhangi bir alanıyla ilgileniyorsan, bize katılabilirsin. Öneri sunmak, yardımda bulunmak, soru sormak veya aramıza katılmak için iletişim sayfamıza göz atabilirsin.</p>
			<div align="center" className="button">
				<Link to="/iletisim">
					<Button variant="dark" text-align="center">İletişim</Button>
				</Link>
			</div>
		</div>
	</Styles>
)

export default Hakkimizda;

const Styles = styled.div`
.button {
	margin-bottom: 40px;
}

.header{
	font-weight: bold;
	margin-top: 30px;
}

.header-top{
	font-weight: bold;
}

.tool-tip {
	font-weight: bold;
	text-decoration: underline !important;
}
`;