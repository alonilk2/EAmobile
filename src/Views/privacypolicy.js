import React, {Component, useState} from 'react';
import { history } from '../history';
import LOGO from '../Images/logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../CSS/ContactCSS.css'
import Footer from '../Components/Footer';
import MenuComponent from '../Components/MenuComponent'


class privacypolicy extends Component 
{
    render()
    {
        return (
            
            <div className="Container" >
                <div className="head">
                    <div className="row logo">
                        <a href="/" style={{height: '100%'}} ><img className="logo-img" src={LOGO}  /></a>
                    </div>
                </div>
                <MenuComponent />
                <div className="about-container">
                    <h3 style={{'text-align': 'center'}}> תנאי שימוש ותקנון פרטיות </h3>
                    <br />
                    <br />
                    <p dir="rtl" className="privacytxt">ברוכים הבאים לEAMobileisrael.com (להלן: &ldquo;האתר&rdquo;). האתר מופעל ע&rdquo;י איתן אברך (ע.מ: 206150344) &nbsp;(להלן: &ldquo;הנהלת האתר&rdquo; או &ldquo;החברה&rdquo;).<br />האתר משמש כאתר ייצוגי עבור החברה, ונועד להפיץ את דבר שירותיה לקהל הרחב.</p>
                    <ol>
                    <li dir="rtl">
                    <p dir="rtl" className="privacytxt">כללי</p>
                    <ol>
                    <li dir="rtl" className="privacytxt">
                    <p dir="rtl">האמור בתקנון זה מתייחס באופן שווה לבני שני המינים, והשימוש בלשון זכר הוא מטעמי נוחות בלבד.</p>
                    </li>
                    <li dir="rtl" className="privacytxt">
                    <p dir="rtl">הוראות תקנון זה ותנאי השימוש המופיעים באתר מגדירים את מערכת היחסים המשפטית בין המזמין לבין האתר, את תנאי השימוש באתר ו/או<br />את הזמנת המוצרים מן האתר ומעידים על הסכמת המזמין, לתנאים אלה ולתנאים נוספים המופיעים באתר.</p>
                    </li>
                    <li dir="rtl" className="privacytxt">
                    <p dir="rtl">החברה רשאית בכל עת, על פי שיקול דעתה הבלעדי, לעדכן &nbsp;תקנון זה.</p>
                    </li>
                    <li dir="rtl" className="privacytxt">
                    <p dir="rtl">תנאים אלה חלים על השימוש באתר ובשירותים הכלולים בו באמצעות כל מחשב או מכשיר תקשורת אחר (כדוגמת טלפון סלולארי, טבלטים למיניהם וכו&rsquo;) כמו כן<br />הם חלים על השימוש באתר, בין באמצעות רשת האינטרנט ובין באמצעות כל רשת או אמצעי תקשורת אחר.</p>
                    </li>
                    <li dir="rtl" className="privacytxt">
                    <p dir="rtl">אין באמור בתקנון זה כדי לגרוע מהוראות חוק הגנת הצרכן, התשמ&rdquo;א-1981 (להלן: &ldquo;חוק הגנת הצרכן&rdquo;) והתקנות אשר הותקנו מכוחו, ככל שהן חלות על האתר<br />(להלן: &ldquo;ההוראות&rdquo;), למעט במקרים בהם ניתן להתנות על הוראות כאמור והתניה כאמור בוצעה במסגרת האתר אם במפורש ואם במשתמע.</p>
                    </li>
                    <li dir="rtl" className="privacytxt">
                    <p dir="rtl">כותרות הפרקים מובאות לשם נוחות והתמצאות המזמין ולא ישמשו בפרשנות התקנון.</p>
                    </li>
                    <li dir="rtl" className="privacytxt">
                    <p dir="rtl">אין להעתיק ולהשתמש, או לאפשר לאחרים להשתמש, בכל דרך אחרת בתכנים מתוך האתר, לרבות באתרי אינטרנט אחרים, בפרסומים אלקטרוניים,<br />בפרסומי דפוס וכיו&rdquo;ב, לכל מטרה אחרת.</p>
                    </li>
                    <li dir="rtl">
                    <p dir="rtl" className="privacytxt">המועד שנרשם, לכל עניין ועניין, במחשבי החברה הוא המועד הקובע לכל דבר.</p>
                    </li>
                    </ol>
                    </li>
                    <li dir="rtl">
                    <p dir="rtl" className="privacytxt">&nbsp;זכויות יוצרים</p>
                    <ol>
                    <li dir="rtl" className="privacytxt">
                    <p dir="rtl">כל זכויות הקניין הרוחני, לרבות פטנטים, זכויות היוצרים, הדגמים, המדגמים והסודות המסחריים, הנם רכושם של החברה בלבד או של צדדים שלישיים אחרים שהרשו להנהלת האתר להשתמש בהם.</p>
                    </li>
                    <li dir="rtl" className="privacytxt">
                    <p dir="rtl">זכויות אלה חלות בין השאר על הנתונים באתר, לרבות רשימת המוצרים, תאור ועיצוב המוצרים וכל פרט אחר הקשור להפעלתו.</p>
                    </li>
                    <li dir="rtl" className="privacytxt">
                    <p dir="rtl">זכויות אלה חלות גם על שם האתר ושם המתחם (www.eamobileisrael.com ) של האתר, סימני המסחר (בין אם נרשמו ובין אם לא) הם כולם רכושה של החברה. אין לעשות בהם שימוש בלא קבלת הסכמתה בכתב ומראש.</p>
                    </li>
                    <li dir="rtl">
                    <p dir="rtl" className="privacytxt">אין להעתיק, לשכפל, להפיץ, למכור, לשווק, להשכיר ולתרגם מידע כלשהו מהאתר, לרבות סימני מסחר, תמונות וטקסטים, עיצוב המוצרים תמונות המוצרים וכיו&rdquo;ב בלא קבלת אישור מראש ובכתב של החברה.</p>
                    </li>
                    </ol>
                    </li>
                    <li dir="rtl">
                    <p dir="rtl" className="privacytxt">אחריות</p>
                    <ol>
                    <li dir="rtl" className="privacytxt">
                    <p dir="rtl">החברה (ו/או מי מטעמה) אינה נושאת במישרין או בעקיפין באחריות כלשהי לנזקים הנובעים כתוצאה משימוש ו/או הסתמכות על מידע המתפרסם באתרים חיצוניים, שאליהם ניתן להגיע באמצעות איזה מהשירותים באתר. יובהר כי החברה עושה ותעשה כמיטב יכולתה לשתף פעולה עם ספקים אמינים ובעלי מוניטין בלבד.</p>
                    </li>
                    <li dir="rtl" className="privacytxt">
                    <p dir="rtl">החברה (ו/או מי מטעמה) אינה נושאת במישרין ו/או בעקיפין באחריות כלשהי לנזקים הנובעים ו/או הקשורים בכל דרך שהיא בשימוש ו/או בביצועי האתר.</p>
                    </li>
                    <li dir="rtl">
                    <p dir="rtl" className="privacytxt">בכל מקרה החברה לא תישא באחריות לפעילות כלשהי של כל גורם אחר שאינו בשליטתה המלאה.</p>
                    </li>
                    </ol>
                    </li>
                    <li dir="rtl">
                    <p dir="rtl" className="privacytxt">סודיות ופרטיות</p>
                    <ol>
                    <li dir="rtl" className="privacytxt">החברה אינה שומרת פרטים מזהים אישיים של גולשי האתר, פרט לפרטים מזהים טכניים, לרבות כתובת IP של מבקר האתר, ואינה משתפת בפרטים אלו אף צד שלישי.</li>
                    <li dir="rtl">
                    <p dir="rtl" className="privacytxt">בקיום מקרים שאינם בשליטתה של החברה ו/או הנובעים מכח עליון, החברה לא תהא אחראית לכל נזק מכל סוג שהוא, עקיף או ישיר, שייגרם למשתמש ו/או למי מטעם המשתמש אם מידע זה יאבד או אם יעשה בו שימוש לא מורשה.</p>
                    </li>
                    </ol>
                    </li>
                    <li dir="rtl">
                    <p dir="rtl" className="privacytxt">דין ושיפוט</p>
                    <ol>
                    <li dir="rtl" className="privacytxt">
                    <p dir="rtl">הדין החל על תקנון זה ו/או על כל פעולה ו/או על סכסוך הנובע ממנו, הוא הדין הישראלי בלבד.</p>
                    </li>
                    <li dir="rtl" className="privacytxt">הדין החל על השימוש באתר, על ההזמנה ועל תקנון זה, לרבות פרשנותו ואכיפתו של התקנון הוא הדין הישראלי בלבד.</li>
                    </ol>
                    </li>
                    </ol>
                </div>
                <Footer />
            </div>
        );
    }
}
export default privacypolicy;