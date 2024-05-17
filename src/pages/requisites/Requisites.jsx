import React from "react";
import s from "./Requisites.module.scss";

export default function Requisites() {
  const currencies = [
    {
      id: 1,
      title: "Lei Moldovenești (MDL)",
      item_1_1: "Beneficiar:",
      item_1_2: "introscop sa",
      item_2_1: "adresa:",
      item_2_2: "chișinau, str. m. manole, 20",
      item_3_1: "cod fiscal:",
      item_3_2: "1003600008563",
      item_4_1: "cod tva:",
      item_4_2: "0400003",
      item_5_1: "banca BENEFICIARĂ:",
      item_5_2: "Filiala remiz moldindconbank sa",
      item_6_1: "cont de decontare:",
      item_6_2: "225191700208",
      item_7_1: "cod iban:",
      item_7_2: "md20ml000000225191700208",
      item_8_1: "cod bancii:",
      item_8_2: "moldmd2x317",
    },
    {
      id: 2,
      title: "Euro (EUR)",
      item_1_1: "Bank correspondent:",
      item_1_2: "COMMERZBANK AG, FRANKFURT/MAN",
      item_2_1: "swift:",
      item_2_2: "cOBA DE FF",
      item_3_1: "beneficiary bank:",
      item_3_2: "MOLDINCONBANK SA",
      item_4_1: "swift:",
      item_4_2: "MOLDMD2X",
      item_5_1: "branch:",
      item_5_2: "REMIZ",
      item_6_1: "beneficiary:",
      item_6_2: "INTROSCOP SA",
      item_7_1: "account no:",
      item_7_2: "222401770208",
    },
    {
      id: 3,
      title: "Dolari SUA (USD)",
      item_1_1: "Bank correspondent:",
      item_1_2: "citibank, N.A., new york",
      item_2_1: "swift:",
      item_2_2: "citi us33",
      item_3_1: "account no:",
      item_3_2: "36111474",
      item_4_1: "beneficiary bank:",
      item_4_2: "MOLDINCONBANK SA",
      item_5_1: "swift:",
      item_5_2: "REMIZ",
      item_6_1: "branch:",
      item_6_2: "INTROSCOP SA",
      item_7_1: "beneficiary:",
      item_7_2: "222401770208",
      item_8_1: "account no:",
      item_8_2: "222401770208",
    },
    {
      id: 4,
      title: "Ruble Rusești (RUB)",
      item_1_1: "БАНК ПОЛУЧАТЕЛЯ:",
      item_1_2: "АК СБЕРБАНК РОССИИ ОАО, МОСКВА",
      item_2_1: "ИНН:",
      item_2_2: "7707083893",
      item_3_1: "БИК:",
      item_3_2: "044525225",
      item_4_1: "КОРР.СЧЕТ:",
      item_4_2: "30101810400000000225",
      item_5_1: "БАНК:",
      item_5_2: "ОПЕРУ МОСКОВСКОГО ГТУ БАНКА РОССИИ",
      item_6_1: "ПОЛУЧАТЕЛЬ:",
      item_6_2: "BC MOLDINCONBANK SA",
      item_7_1: "СЧЕТ:",
      item_7_2: "30111810800000000387",
      item_8_1: "НАЗНАЧЕНИЕ ПЛАТЕЖА:",
      item_8_2:
        "для АО «INTROSCOP», счет 222401770208, вотд. REMIZ, МФО MOLDMD2X317 за....догов...от...(ссылка на НДС)",
    },
  ];

  return (
    <>
      <article className={s.requisites}>
        <div className={s.requisites__container}>
          <div className={s.requisites__inner}>
            <h2 className={s.requisites__title}>
            DATE FISCALE ȘI<br />
            BANCARE
              
            </h2>
          </div>
        </div>

        <div className={s.requisites__footer} data-aos="fade-in">
          <div className={s.requisites__container}>
            <p className={s.requisites__company_name}>
              Numele companiei: "INTROSCOP" SA, (Societatea pe Acțiuni
              "INTROSCOP")
            </p>
            <p className={s.requisites__company_idno}>IDNO 1003600008563</p>
            <p className={s.requisites__company_address}>
              <b>Adresa juridică: </b>
              <span>
                str. Meșterul Manole, 20, MD-2044, Chișinău, Republica Moldova
              </span>
            </p>
          </div>
        </div>
      </article>

      <article className={s.currencies} data-aos="fade-up" smooth="true">
        <div className={s.currency__container}>
          {currencies.map((currency) => {
            return (
              <div key={currency.id} className={s.currency__table}>
                <h4 className={s.currency__title}>Valuta: {currency.title}</h4>
                <table>
                  <thead>
                    <tr>
                      <th>{currency.item_1_1}</th>
                      <td>{currency.item_1_2}</td>
                    </tr>
                    <tr>
                      <th>{currency.item_2_1}</th>
                      <td>{currency.item_2_2}</td>
                    </tr>
                    <tr>
                      <th>{currency.item_3_1}</th>
                      <td>{currency.item_3_2}</td>
                    </tr>
                    <tr>
                      <th>{currency.item_4_1}</th>
                      <td>{currency.item_4_2}</td>
                    </tr>
                    <tr>
                      <th>{currency.item_5_1}</th>
                      <td>{currency.item_5_2}</td>
                    </tr>
                    <tr>
                      <th>{currency.item_6_1}</th>
                      <td>{currency.item_6_2}</td>
                    </tr>
                    <tr>
                      <th>{currency.item_7_1}</th>
                      <td>{currency.item_7_2}</td>
                    </tr>
                    <tr>
                      <th>{currency.item_8_1}</th>
                      <td>{currency.item_8_2}</td>
                    </tr>
                  </thead>
                </table>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
}
