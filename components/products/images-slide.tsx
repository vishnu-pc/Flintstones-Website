import styles from '../../styles/components/products/image-slide.module.css';
import Image from 'next/image';
// import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { BookmarkStarFill, List } from 'react-bootstrap-icons';
import Moodboard from '../../pages/moodboard';
import Cookie from "js-cookie"
import React,{ useState } from 'react';
import exp from '../../public/images/external-link-white.png';
import Link from 'next/link';
import { Modal, Button } from 'react-bootstrap';
import {init, send} from '@emailjs/browser';

 //import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
// import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
type Props = {
    images: any[],
    title: string;
}
export default function ImagesSlide(props: Props) {
  init('Umo2eevxzv3CLTiwg');
  let serviceId = 'service_m0qvqz2';
  let templateId = 'template_c6xsgwo';

    const [book_interested, bookIinterested] = useState('');
    const [requirement, bookRequirement] = useState('');
    const [book_name, bookName] = useState('');
    const [book_phone, bookPhone] = useState('');
    const [book_email, bookEmail] = useState('');
    const [book_state, bookState] = useState('');
    const [book_city, bookCity] = useState('');
    const [book_profession, bookProfession] = useState('');
    function sendMail() {
        let payload = {
            book_interested: book_interested,
            requirement: requirement,
            book_name: book_name,
            book_phone: book_phone,
            book_email: book_email,
            book_state: book_state,
            book_profession: book_profession,
            book_city: book_city,
        };
        sendFeedback(payload);
    }
    const sendFeedback = (payload: any) => {
        send(serviceId, templateId, payload)
            .then(() => {
                console.log('email success');
            })
            .catch((err: any) => console.error('error', err));
            bookIinterested(' ');
            bookRequirement(' ');
            bookName(' ');
            bookPhone(' ');
            bookEmail(' ');
            bookState(' ');
            bookCity(' ');
            bookProfession(' ');
    };
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
      setShowModal(!showModal);
    };
  
    
    const storeImage=(a:string,b:number)=>{
       var name="favs"+b.toString()
       
       Cookie.set(name,a)
        localStorage.setItem(name,a)
    }
    
    
    return (
        <div className={styles.container}>
            
            <h2 className={styles.title}><b>{props.title}</b>
            <span className={styles.imageWrapper1}>
            <Link href="#">
                <a onClick={() => setShowModal(true)}>
                <Image alt="Overlay Image" width="30" height="30" src={exp} />
                </a>
                </Link>

  </span> 
            </h2>
            <Modal show={showModal} onHide={handleModal} size="xl">
        <form
          method="post"
          id="form_book"
          className="custom-form text-left row"
          action=""
          data-gtm-form-interact-id={0}
          style={{  background: "#333",padding: "20px" }}>
          <Modal.Body>
          
                  <h3
                    className="text-center"
                    style={{ color: "#fff", textDecoration: "underline" }}
                  >
                    BOOK A FREE APPOINTMENT WITH OUR PARADISE EXPERT
                  </h3>

                  <div className="col-md-12">
                    <div className="form-set" style={{  padding: "10px" }}>
                      <label
                        style={{ display: "block", marginBottom: ".5rem" }}
                      >
                        Interested in *
                      </label>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkInterested1"
                          value="Tiles"
                          tabIndex={1}
                          name="book_interested"
                          onChange={(e) => bookIinterested(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="chkInterested1"
                        >
                          Tiles
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkInterested2"
                          tabIndex={2}
                          name="book_interested"
                          value="Sanitaryware &amp; bath fittings"
                          onChange={(e) => bookIinterested(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="chkInterested2"
                        >
                          Sanitaryware &amp; bath fittings
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkInterested3"
                          tabIndex={3}
                          name="book_interested"
                          value="Engineered Marble &amp; Quartz"
                          onChange={(e) => bookIinterested(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="chkInterested3"
                        >
                          Engineered Marble &amp; Quartz
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkInterested4"
                          tabIndex={4}
                          name="book_interested"
                          value="Others"
                          onChange={(e) => bookIinterested(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="chkInterested4"
                        >
                          Others
                        </label>
                      </div>
                      <div className="form-set">
                        <input
                          type="text"
                          style={{ paddingTop: "10px" }}
                          className="form-control"
                          id="interested_others"
                          name="interested_others"
                          placeholder="Others (Please Specify)"
                          maxLength={250}
                        />
                      </div>
                      
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="book_interested"
                        data-valmsg-replace="true"
                      />
                      <div
                        id="interested-error"
                        className="invalid-feedback"
                        style={{ display: "none" }}
                      >
                        Please select atleast one
                      </div>
                      <div
                        id="interestedoth-error"
                        className="invalid-feedback"
                        style={{ display: "none" }}
                      >
                        Please enter into others
                      </div>
                    </div>
                    <div className="form-set" style={{  padding: "10px" }}>
                      <label
                        style={{ display: "block", marginBottom: ".5rem" }}
                      >
                        Requirement is *
                      </label>
                      <div className="form-check form-check-inline">
                      <input
                          className="form-check-input"
                          type="radio"
                          id="chkInterested4"
                          tabIndex={4}
                          name="requirement"
                          value="Immediate"
                          onChange={(e) => bookRequirement(e.target.value)}
                        />
                        
                        <label
                          className="form-check-label"
                          htmlFor="chkrequirement1"
                        >
                          Immediate
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkrequirement2"
                          value="Within a month"
                          tabIndex={7}
                          name="requirement"
                          onChange={(e) => bookRequirement(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="chkrequirement2"
                        >
                          Within a month
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkrequirement3"
                          value="Later"
                          tabIndex={8}
                          name="requirement"
                          onChange={(e) => bookRequirement(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="chkrequirement3"
                        >
                          Later
                        </label>
                      </div>
                      
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="requirement"
                        data-valmsg-replace="true"
                      />
                      <div
                        id="requirement-error"
                        className="invalid-feedback"
                        style={{ display: "none" }}
                      >
                        Please select atleast one
                      </div>
                    </div>
                    <div className="form-set" style={{  padding: "10px" }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        tabIndex={9}
                        maxLength={49}
                        data-val="true"
                        data-val-length="The field Name must be a string with a maximum length of 49."
                        data-val-length-max={49}
                        data-val-regex="Please enter correct name"
                        data-val-regex-pattern="^[A-Za-z. ]+$"
                        data-val-required="Name is required"
                        id="book_name"
                        name="book_name"
                        required
                        onChange={(e) => bookName(e.target.value)}
                      />
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="book_name"
                        data-valmsg-replace="true"
                      />
                      <div
                        id="book_name-error"
                        className="invalid-feedback"
                        style={{ display: "none" }}
                      >
                        Name is required
                      </div>
                    </div>
                    <div className="form-set" style={{  padding: "10px" }}>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter your phone number"
                        tabIndex={11}
                        maxLength={15}
                        data-val="true"
                        data-val-regex="Invalid Contact Number"
                        data-val-regex-pattern="^\d+$"
                        data-val-required="Contact Number is required"
                        id="book_phone"
                        name="book_phone"
                        required
                        onChange={(e) => bookPhone(e.target.value)}
                      />
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="book_phone"
                        data-valmsg-replace="true"
                      />
                      <div
                        id="book_phone-error"
                        className="invalid-feedback"
                        style={{ display: "none" }}
                      >
                        Contact Number is required
                      </div>
                    </div>
                    <div className="form-set" style={{  padding: "10px" }}>
                      <select
                        className="form-control"
                        tabIndex={13}
                        data-val="true"
                        data-val-maxlength="The field State must be a string or array type with a maximum length of '99'."
                        data-val-maxlength-max={99}
                        data-val-required="State is required"
                        id="book_state"
                        name="book_state"
                        required
                        onChange={(e) => bookState(e.target.value)}
                      >
                        <option style={{color: "#000"}} value="">Select State</option>
                        <option style={{color: "#000"}} value="Andaman &amp; Nicobar Islands">
                          Andaman &amp; Nicobar Islands
                        </option>
                        <option style={{color: "#000"}} value="Andhra Pradesh">Andhra Pradesh</option>
                        <option style={{color: "#000"}} value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option style={{color: "#000"}} value="Assam">Assam</option>
                        <option style={{color: "#000"}} value="Bihar">Bihar</option>
                        <option style={{color: "#000"}} value="Chandigarh">Chandigarh</option>
                        <option style={{color: "#000"}} value="Chhattisgarh">Chhattisgarh</option>
                        <option style={{color: "#000"}} value="Dadra &amp; Nagar Haveli">
                          Dadra &amp; Nagar Haveli
                        </option>
                        <option style={{color: "#000"}} value="Daman &amp; Diu">Daman &amp; Diu</option>
                        <option style={{color: "#000"}} value="Delhi">Delhi</option>
                        <option style={{color: "#000"}} value="Goa">Goa</option>
                        <option style={{color: "#000"}} value="Gujarat">Gujarat</option>
                        <option style={{color: "#000"}} value="Haryana">Haryana</option>
                        <option style={{color: "#000"}} value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option style={{color: "#000"}} value="Jammu &amp; Kashmir">
                          Jammu &amp; Kashmir
                        </option>
                        <option style={{color: "#000"}} value="Jharkhand">Jharkhand</option>
                        <option style={{color: "#000"}} value="Karnataka">Karnataka</option>
                        <option style={{color: "#000"}} value="Kerala">Kerala</option>
                        <option style={{color: "#000"}} value="Ladakh">Ladakh</option>
                        <option style={{color: "#000"}} value="Lakshadweep">Lakshadweep</option>
                        <option style={{color: "#000"}} value="Madhya Pradesh">Madhya Pradesh</option>
                        <option style={{color: "#000"}} value="Maharashtra">Maharashtra</option>
                        <option style={{color: "#000"}} value="Manipur">Manipur</option>
                        <option style={{color: "#000"}} value="Meghalaya">Meghalaya</option>
                        <option style={{color: "#000"}} value="Mizoram">Mizoram</option>
                        <option style={{color: "#000"}} value="Nagaland">Nagaland</option>
                        <option style={{color: "#000"}} value="Odisha">Odisha</option>
                        <option style={{color: "#000"}} value="Puducherry">Puducherry</option>
                        <option style={{color: "#000"}} value="Punjab">Punjab</option>
                        <option style={{color: "#000"}} value="Rajasthan">Rajasthan</option>
                        <option style={{color: "#000"}} value="Sikkim">Sikkim</option>
                        <option style={{color: "#000"}} value="Tamil Nadu">Tamil Nadu</option>
                        <option style={{color: "#000"}} value="Telangana">Telangana</option>
                        <option style={{color: "#000"}} value="Tripura">Tripura</option>
                        <option style={{color: "#000"}} value="Uttar Pradesh">Uttar Pradesh</option>
                        <option style={{color: "#000"}} value="Uttarakhand">Uttarakhand</option>
                        <option style={{color: "#000"}} value="West Bengal">West Bengal</option>
                      </select>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="book_state"
                        data-valmsg-replace="true"
                      />
                      <input type="hidden" id="statename" name="statename" />
                      <div
                        id="book_state-error"
                        className="invalid-feedback"
                        style={{ display: "none" }}
                      >
                        State is required
                      </div>
                    </div>
                    <div className="form-set clearfix" style={{  padding: "10px" }}>
                      <select
                      required
                        className="form-control"
                        tabIndex={10}
                        data-val="true"
                        data-val-maxlength="The field Profession must be a string or array type with a maximum length of '99'."
                        data-val-maxlength-max={99}
                        data-val-required="Profession is required"
                        id="book_profession"
                        name="book_profession"
                        style={{}}
                        onChange={(e) => bookProfession(e.target.value)}
                        data-gtm-form-interact-field-id={5}
                      >
                        <option style={{color: "#000"}} value="">Select Profession</option>
                        <option style={{color: "#000"}} value="Individual">Individual</option>
                        <option style={{color: "#000"}} value="Architect">Architect</option>
                        <option style={{color: "#000"}} value="Interior Designer">
                          Interior Designer
                        </option>
                        <option style={{color: "#000"}} value="Dealer">Dealer</option>
                        <option style={{color: "#000"}} value="Builder/Developer">
                          Builder/Developer
                        </option>
                        <option style={{color: "#000"}} value="Contractor">Contractor</option>
                        <option style={{color: "#000"}} value="Other">Other</option>
                      </select>
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="book_profession"
                        data-valmsg-replace="true"
                      />
                      <div
                        id="book_profession-error"
                        className="invalid-feedback"
                        style={{ display: "none" }}
                      >
                        Profession is required
                      </div>
                    </div>
                    <div className="form-set clearfix" style={{  padding: "10px" }}>
                      <input
                      required
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                        tabIndex={12}
                        maxLength={99}
                        data-val="true"
                        data-val-email="The Email field is not a valid e-mail address."
                        data-val-maxlength="The field Email must be a string or array type with a maximum length of '99'."
                        data-val-maxlength-max={99}
                        data-val-required="Please enter your email address"
                        id="book_email"
                        name="book_email"
                        onChange={(e) => bookEmail(e.target.value)}
                      />
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="book_email"
                        data-valmsg-replace="true"
                      />
                      <div
                        id="book_email-error"
                        className="invalid-feedback"
                        style={{ display: "none" }}
                      >
                        Email address is required
                      </div>
                    </div>
                    <div className="form-set clearfix" style={{  padding: "10px" }}>
                      <input
                      required
                        type="text"
                        className="form-control"
                        placeholder="Enter City"
                        tabIndex={12}
                        maxLength={99}
                        data-val="true"
                        data-val-maxlength-max={99}
                        data-val-required="Please enter your city"
                        id="book_city"
                        name="book_city"
                        onChange={(e) => bookCity(e.target.value)}
                      />
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="book_email"
                        data-valmsg-replace="true"
                      />
                      <div
                        id="book_city-error"
                        className="invalid-feedback"
                        style={{ display: "none" }}
                      >
                        City is required
                      </div>
                    </div>
                  </div>
                </Modal.Body>
          <Modal.Footer>
         <button onClick={sendMail} type='submit' style={{color:"#000"}}>Submit</button>
         <button onClick={handleModal} type='submit' style={{color:"#000"}}>Close</button>
            {/* Add additional buttons if needed */}
          </Modal.Footer>
        </form>
      </Modal>
            <div className={styles.slider}>
                {
                    props.images.map(image => (
                        <>
                        <div  className={styles.dropdown} style={{position:"relative", zIndex:"10"}}>
                        <button className={styles.dropbtn} >
                            
                            <div className={styles.dropdownContent}>
                                <a onClick={()=>storeImage(image.src,1)}>1</a>
                                <a onClick={()=>storeImage(image.src,2)}>2</a>
                                <a onClick={()=>storeImage(image.src,3)}>3</a>
                                <a onClick={()=>storeImage(image.src,4)}>4</a>
                                <a onClick={()=>storeImage(image.src,5)}>5</a>
                                <a onClick={()=>storeImage(image.src,6)}>6</a>
                                </div>
                        </button>

                        </div>
                        <div key={image.src} className={styles.imageWrapper}>
                            <Image quality="80" width="100" height="100"layout="fill" objectFit="cover" src={image} alt={image.src} ></Image>
                        </div>
                        
                        </>
                    ))
                }
            </div>
        </div>
    
    );
    
}