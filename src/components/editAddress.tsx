import Modal from "react-bootstrap/Modal";
import Inputs from "./default/inputs";
import ReactSelect from "react-select";
import { CITIES } from "@/static/cities";
import AddressStore from "@/store/addresses";
import { cn } from "@/lib/cn";

function EditAddress(props: {
  name: string;
  show: boolean;
  setShow: any;
  title: string;
  close: any;
}) {
  const { show, setShow, title, close, name } = props;
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      width: "100%", // Set the desired width here
      height: "100%", // Set the desired width here
      border: "2px solid #d3d0d0",
      borderRadius: "4px",
      backgroundColor: "#fafafa",
      color: "#929292",
      boxShadow: "none",
      "&:hover": {
        border: "2px solid #d3d0d0",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#d3d0d0" : "transparent",
      color: state.isSelected ? "#ffffff" : "#000000",
      "&:hover": {
        backgroundColor: "#d3d0d0",
        color: "#929292",
      },
    }),
    menu: (provided: any) => ({
      ...provided,

      backgroundColor: "#ffffff",
      height: "200px",
      overflow: "hidden",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      borderRadius: "4px",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      fontSize: "12px",
      color: "#929292",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#000000",
    }),
  };
  console.log(name);
  const {
    setName,
    phone,
    setPhone,
    city,
    setCity,
    brief,
    setBrief,
    handleClose,
  } = AddressStore();
  return (
    <Modal
      show={show}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className=" absolute"
      onHide={() => close()}
    >
      <Modal.Header closeButton>
        <Modal.Title className=" font-bold text-primary4">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className=" flex flex-col  mt-[-20px] ">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name={"name"}
            placeholder={"Recipient's name"}
            className={cn(
              "    w-full border-[#d3d0d0] border-[2px] mt-[10px] px-4 py-2 text-sm rounded-md placeholder:text-placeholder placeholder:text-sm outline-none"
            )}
          />
          {/* <Inputs
            text="Name"
            holder=
            name="name"
            value={name}
          /> */}
          <Inputs
            text="Phone"
            holder="Recipient's phone"
            name="phone"
            value={phone}
            onChange={(e: any) => setPhone(e.target.value)}
          />
          <div className=" w-full mt-[10px]">
            <ReactSelect
              options={CITIES.map((des: { id: number; name: string }) => ({
                value: des.id,
                label: des.name,
              }))}
              defaultValue={{
                value: CITIES[0].id,
                label: CITIES[0].name,
              }}
              onChange={(e: any) => setCity(e)}
              styles={customStyles}
              placeholder="City"
            />
          </div>
          <textarea
            value={brief}
            placeholder="Address"
            name="Address"
            rows={4}
            onChange={(e: any) => setBrief(e.target.value)}
            className=" w-full  border-[#d3d0d0] border-[2px] px-4 mt-[10px] py-2 text-sm rounded-md placeholder:text-placeholder"
          />
          <div className=" flex gap-1 mt-[20px]">
            <button className=" w-full text-center py-[2px] rounded-sm bg-primary4 text-white">
              Add
            </button>
            <button
              className=" w-full  border-primary4 text-center py-[2px] rounded-sm text-primary4"
              onClick={() => {
                handleClose();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default EditAddress;
