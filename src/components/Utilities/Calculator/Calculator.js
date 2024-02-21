import React, { useState } from 'react';
import './Calculator.css';

const BuildingCalculatorReact = () => {
    const [loaiCongTrinh, setLoaiCongTrinh] = useState('1');
    const [loaiXay, setLoaiXay] = useState('1');
    const [mucDauTu, setMucDauTu] = useState('1');
    const [loaiNha, setLoaiNha] = useState('1');

    const [chieuRong, setChieuRong] = useState('');
    const [chieuDai, setChieuDai] = useState('');
    const [soTang, setSoTang] = useState('');
    const [hem, setHem] = useState('1');

    const [lung, setLung] = useState('');
    const [tum, setTum] = useState('');
    const [loaiSanThuong, setLoaiSanThuong] = useState('1');
    const [banCong, setBanCong] = useState('0');

    const [mong, setMong] = useState('1');
    const [tangHam, setTangHam] = useState('1');
    const [mai, setMai] = useState('1');
    const [sanVuong, setSanVuong] = useState('');

    const handleCalculate = (e) => {
        e.preventDefault();

        // Your calculation logic goes here
        console.log('Loại nhà:', loaiNha);
        console.log('Loại xây:', loaiXay);
        console.log('Mức đầu tư:', mucDauTu);
        console.log('Loại công trình:', loaiCongTrinh);
        console.log('Chiều rộng:', chieuRong);
        console.log('Chiều dài:', chieuDai);
        console.log('Số tầng:', soTang);
        console.log('Hẻm:', hem);
        console.log('Lửng:', lung);
        console.log('Tầng thượng:', tum);
        console.log('Loại sân thượng:', loaiSanThuong);
        console.log('Ban công:', banCong);
        console.log('Móng:', mong);
        console.log('Tầng hầm:', tangHam);
        console.log('Mái:', mai);
        console.log('Sân vườn:', sanVuong);
    };

    return (
        <form role="search" method="get" className="tienich" onSubmit={handleCalculate}>
            <p>
                <strong>
                    Quý khách vui lòng nhập đầy đủ các thông tin bên dưới, trường hợp công năng không có quý khách vui lòng để trống.
                    Lưu ý quý khách nhập diện tích xây dựng (không phải diện tích đất) để có kết quả tính tương đối chính xác nhất.
                    Đơn giá phụ thuộc vào nhiều yếu tố như: diện tích xây dựng, quy mô công trình, điều kiện thi công, chủng loại vật liêu,... Kết quả tính này chỉ mang tính chất tham khảo, để được tư vấn chính xác nhất vui lòng liên hệ với hotline{' '}
                    <a href="tel:0912345678" style={{ color: 'red' }}>
                        0912345678
                    </a>{' '}
                    của công ty chúng tôi. Chân thành cảm ơn quý khách!
                </strong>
            </p>

            <div class="thongtin_coban">
                <h4 class="title_tg">Thông tin cơ bản</h4><div class="clearfix"></div>
                <div class="row field">
                    <div class="col-md-3">
                        <span>Chọn loại công trình: </span>
                        <select class="form-control" id="loainha" name="loainha">
                            <option value="1">Nhà phố</option>
                            <option value="2">Biệt thự</option>
                            <option value="3">Nhà cấp bốn</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <span>Dịch vụ xây nhà: </span>
                        <select class="form-control" id="loaixay" name="loaixay">
                            <option value="1">Xây nhà phần thô</option>
                            <option value="2">Xây nhà trọn gói</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <span>Mức đầu tư: </span>
                        <select class="form-control" id="mucdautu" name="mucdautu">
                            <option value="1">Trung bình</option>
                            <option value="2">TB - Khá</option>
                            <option value="3">Khá+</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <span>Loại nhà: </span>
                        <select class="form-control" id="mattien" name="mattien">
                            <option value="1">Hiện đại</option>
                            <option value="2">Cổ điển</option>
                        </select>
                    </div>
                </div>

                <div class="clearfix"></div>
                <div class="margin-top-20"></div>

                <div class="row field">

                    <div class="col-md-3">
                        <span>Chiều rộng(Ví dụ 2.5m): </span>
                        <input type="number" class="form-control" id="rty" name="rty" step="0.01" placeholder="Nhập chiều rộng" min="0" />
                    </div>
                    <div class="col-md-3">
                        <span>Chiều dài(Ví dụ 10.5m): </span>
                        <input type="number" class="form-control" id="dty" name="dty" step="0.01" placeholder="Nhập chiều dài" min="0" />
                    </div>
                    <div class="col-md-3">
                        <span>Số tầng(Trừ tum, lửng): </span>
                        <input type="number" class="form-control" id="tang" name="tang" step="1" placeholder="Nhập số tầng" min="0" />
                    </div>
                    <div class="col-md-3">
                        <span>Hẻm: </span>
                        <select class="form-control" id="tangham" name="hem">
                            <option value="1">Rộng hơn 5m</option>
                            <option value="2">Rộng từ 3m - 5m</option>
                            <option value="3">Nhỏ hơn 3m</option>
                        </select>

                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="margin-top-20"></div>
            <div class="thongtin_chitiet">
                <h4 class="title_tg">Thông tin công năng</h4><div class="clearfix"></div>
                <div class="row field">
                    <div class="col-md-3 tang">
                        <span>Lửng(Ví dụ 30m2):</span>
                        <input type="number" class="form-control" id="lung" name="lung" step="0.01" placeholder="Nhập diện tích" min="0" />
                    </div>
                    <div class="col-md-3 ham">
                        <span>Tum(Tầng thượng)(Ví dụ 30m2): </span>
                        <input type="number" class="form-control" id="tum" name="tum" step="0.01" placeholder="Nhập diện tích" min="0" />
                    </div>
                    <div class="col-md-3">
                        <span>Sân thượng: </span>
                        <select class="form-control" id="loaisanthuong" name="loaisanthuong">
                            <option value="1">Sân thượng</option>
                            <option value="2">Sân thượng có mái</option>
                        </select>
                    </div>
                    <div class="col-md-3 mong">
                        <span>Ban công: </span>
                        <select class="form-control" id="bancong" name="bancong">
                            <option value="0" selected="">Không có</option>
                            <option value="1">Có ban công</option>
                        </select>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="margin-top-20"></div>
                <div class="row field">
                    <div class="col-md-3 mong">
                        <span>Móng: </span>
                        <select class="form-control" id="mong" name="mong">
                            <option value="1">Móng băng</option>
                            <option value="2">Móng cọc(Móng đài)</option>
                            <option value="3">Móng đơn</option>
                        </select>
                    </div>
                    <div class="col-md-3 mong">
                        <span>Tầng hầm: </span>
                        <select class="form-control" id="tangham" name="tangham">
                            <option value="1">Không hầm</option>
                            <option value="2">Độ sâu 1.0 - 1.2</option>
                            <option value="3">Độ sâu 1.2 - 1.5</option>
                            <option value="4">Độ sâu 1.5 - 1.7</option>
                            <option value="5">Độ sâu 1.7 - 2.0</option>
                            <option value="6">Độ sâu 2.0 - 2.5</option>
                            <option value="7">Độ sâu 2.5 - 3.0</option>
                        </select>
                    </div>
                    <div class="col-md-3 mong">
                        <span>Mái: </span>
                        <select class="form-control" id="mai" name="mai">
                            <option value="1">Mái tôn</option>
                            <option value="2">Mái BTCT</option>
                            <option value="3">Xà gồ + ngói</option>
                            <option value="4">BTCT + ngói</option>
                        </select>
                    </div>

                    <div class="col-md-3 santruoc">
                        <span>Sân vườn(Ví dụ 10m2): </span>
                        <input type="number" min="0" class="form-control" id="sanvuon" name="sanvuon" step="0.01" placeholder="Nhập diện tích" />
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="margin-top-20"></div>

            <button type="submit" className="btn" id="tinhbtn">
                Tính kết quả
            </button>
        </form>
    );
};

export default BuildingCalculatorReact;
