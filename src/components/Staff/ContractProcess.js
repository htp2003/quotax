// ContractProcess.js
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContractProcess = () => {
    const [contracts, setContracts] = useState([
        { id: 1, name: 'Contract 1', status: 'Đang chờ xử lý' },
        { id: 2, name: 'Contract 2', status: 'Nhận ý kiến từ customer' },
        { id: 3, name: 'Contract 3', status: 'Hoàn thành hợp đồng' },
    ]);

    const [selectedContract, setSelectedContract] = useState(null);
    const [newStatus, setNewStatus] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const statusOptions = ['Đang chờ xử lý', 'Nhận ý kiến từ customer', 'Hoàn thành hợp đồng', 'Kết thúc'];

    const openPopup = (contract) => {
        setSelectedContract(contract);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setSelectedContract(null);
        setNewStatus('');
        setIsPopupOpen(false);
    };

    const updateContractStatus = () => {
        setContracts((prevContracts) =>
            prevContracts.map((contract) =>
                contract.id === selectedContract.id ? { ...contract, status: newStatus } : contract
            )
        );
        toast.success(`Updated status for ${selectedContract.name} to ${newStatus}`);
        closePopup();
    };

    return (
        <div className="contract-process-container">
            {contracts.map((contract) => (
                <div key={contract.id} className="contract-process-item">
                    <h3>{contract.name}</h3>
                    <p>Status: {contract.status}</p>
                    <ProgressBar currentStep={contract.status} />
                    <button onClick={() => openPopup(contract)}>Update Status</button>
                </div>
            ))}

            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Update Status for {selectedContract?.name}</h2>
                        <label>Select Status:</label>
                        <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                            {statusOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <button onClick={updateContractStatus}>Update Status</button>
                        <button onClick={closePopup}>Cancel</button>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default ContractProcess;
