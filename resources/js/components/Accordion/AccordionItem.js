import React, {useState, useEffect} from 'react';
import up from '../../../assets/icons/chevron-up.svg'
import down from '../../../assets/icons/chevron-down.svg'

const AccordionItem = ({item, index}) => {
    const [icon, setIcon] = useState(up);
    const collapsed = index === 0 ? '' : 'collapsed';
    const show = index === 0 ? 'show' : '';
    const chevron = show ? down : up;

    /*useEffect(() => {
        setIcon(show ? down : up);
    });

    console.log(show);*/

    return (
        <div className="card">
            <div className="card-header" id={`heading${index}`}>
                <h2 className="mb-0">
                    <button
                        className="btn text-left d-flex justify-content-between align-items-center"
                        type="button"
                        data-toggle="collapse"
                        data-target={`#collapse${index}`}
                        aria-expanded={index === 0 ? 'true' : 'false'}
                        aria-controls={`collapse${index}`}
                    >
                        {item.title}
                    </button>

                </h2>
            </div>

            <div
                id={`collapse${index}`}
                className={`collapse ${show}`}
                aria-labelledby={`heading${index}`}
                data-parent="#accordionExample"
            >
                <div className="card-body">
                    <p>{item.content}</p>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
