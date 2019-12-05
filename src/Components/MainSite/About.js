import React, {Component} from "react";

const About = (props) => {
    return (
        <section className="about" id={'about'}>
            <h2 className='about_header'><span>Shopper</span> - Twój manager zakupów</h2>
            <div className="about_content">
                <div className="about_content_image">
                    <i className="fas fa-list-ul"/>
                    <i className="fas fa-share"/>
                    <i className="fas fa-user-friends"/>
                    <i className="fas fa-shopping-basket"/>
                    <i className="fas fa-coins"/>

                </div>
                <p className="about_content_text">Poznaj aplikację, która pomoże Ci zorganizować wyjścia po zakupy.
                    Dzięki czytelnym listom już nigdy nie zapomnisz o potrzebnych produktach. Notatkami możesz podzielić
                    się z bliskimi i znajomymi, artykułu wzięte do koszyka możecie oznaczać na swoich telefonach, a
                    dzięki bieżącej aktualizacji nie zdublujecie zakupów. Listy oferują dodatkowe pola, w które możesz
                    wprowadzić kwoty zapłacone za poszczególne produkty, ułatwi to kontrolowanie wydatków, a jeśli to
                    nie w twoim stylu, opcję możesz po prostu wyłączyć i nie przejmować się cenami.
                </p>
            </div>
        </section>
    )
};

export {About};