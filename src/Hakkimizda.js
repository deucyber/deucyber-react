import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'

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
`;

export const Hakkimizda = () => (
	<Styles>
		<div>
			<h2 className="header-top">Ekibimiz</h2>
			<p>DEUCYBER Ekibi, siber güvenlik alanıyla ilgilenen birkaç Bilgisayar Bilimleri öğrencisinin bir araya gelmesiyle oluşmuştur.</p>
			<h2 className="header">Hedeflerimiz</h2>
			<p>Öncelikli hedefimiz Dokuz Eylül Üniversitesinde siber güvenlik alanıyla ilgili bir etkileşim/tartışma ortamı yaratmaktır. Bu hedef doğrultusunda ilk adımımızı resmi bir topluluk haline gelmek olarak belirledik. Devamında çeşitli etkinlik ve projeler sayesinde Üniversitemiz çapında hedeflerimiz şunlardır:</p>
			<ul>
				<li>Hack kültürünü yaşatmak</li>
				<li>Bilgi güvenliği farkındalığı yaratmak</li>
				<li>Siber güvenlik temalı yarışmalarda Üniversitemizi ve Ülkemizi temsil etmek</li>
				<li>Sürekli tartışma ortamı sayesinde aktif bilgi paylaşımını sağlamak</li>
			</ul>
			<h2 className="header">Etkinlikler</h2>
			<p>Resmi faaliyetler olarak nitelendirdiğimiz, hayata geçirmeyi düşündüğümüz etkinlik ve projelerin bir kısmı şunlardır:</p>
			<ul>
				<li>Belirli bilgi seviyesine sahip üyelerin sınıf ortamında verdiği siber güvenlik temalı eğitimlerin düzenlenmesi</li>
				<li>Üniversite içi ve dışı siber güvenlik temalı yarışmalar düzenlemek</li>
				<li>Siber güvenlik alanında yetkin kişilerin bilgisini aktarabileceği konferanslar/eğitimler düzenlemek</li>
			</ul>
			<p>Bu etkinlikler doğrultusunda düzenlemeyi planladığımız daha bir çok etkinlik ve proje mevcut. Aktif bilgi paylaşımı ve fikir üretilmesi sayesinde düzenleyeceğimiz etkinlikler ve yapacağımız projelerle Üniversitemizdeki siber güvenlik alanındaki boşluğu kapatabileceğimize inanıyoruz.</p>
			<p>Amaçlarımıza ulaşabilmek için bizimle aynı vizyona sahip üyelere ihtiyacımız var. Bilişim dünyasının herhangi bir alanıyla ilgili veya meraklıysan bize katılabilirsin. Gönüllü olarak yardımda bulunmak, öneri sunmak, soru sormak veya aramıza katılmak için iletişim sayfamıza göz atabilirsin:</p>
			<div align="center" className="button"><Button variant="dark" text-align="center" href="/iletisim">İletişim</Button></div>
		</div>
	</Styles>
)
