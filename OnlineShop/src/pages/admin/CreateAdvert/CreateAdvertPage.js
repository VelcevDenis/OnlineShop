import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AdminAppLayout from '../../../components/admin/AdminAppLayout';
import { publicRoutes } from '../../../routes/publicRoutes';
import cars from '../../../staticJSON/Transport/car.json';
import carBrands from '../../../staticJSON/globalArrays/carBrands.json';
import carModels from '../../../staticJSON/globalArrays/carModels.json';
import years from '../../../staticJSON/globalArrays/years.json';
import months from '../../../staticJSON/globalArrays/months.json';
import bodyType from '../../../staticJSON/globalArrays/bodyType.json';
import fuelType from '../../../staticJSON/globalArrays/fuelType.json';
import color from '../../../staticJSON/globalArrays/color.json';

const CreateAdvertPage = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(() => JSON.parse(localStorage.getItem('selected')) || null);
  const [subSelected, setSubSelected] = useState(() => localStorage.getItem('subSelected') || null);
  const [selectedIndex, setSelectedIndex] = useState(() => JSON.parse(localStorage.getItem('selectedIndex')) || null);
  const [search, setSearch] = useState('');
  const [checkboxState, setCheckboxState] = useState({});
  const [selectedBrand, setSelectedBrand] = useState('');

  useEffect(() => {
    localStorage.setItem('selected', JSON.stringify(selected));
    localStorage.setItem('subSelected', subSelected);
    localStorage.setItem('selectedIndex', JSON.stringify(selectedIndex));
  }, [selected, subSelected, selectedIndex]);

  const getSubcategoryBlocks = (subSelected) => {
    const carCategoryData = cars.find((item) => item[subSelected]);
    if (!carCategoryData) return [];
    return carCategoryData[subSelected];
  };

  const filteredOptions = publicRoutes.filter(route =>
    route.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (option, index) => {
    setSelected(option);
    setSelectedIndex(index);
    setSearch('');
    setSubSelected(null);
  };

  const carCategories = cars.map(obj => Object.keys(obj)[0]);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxState((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const handleRadioChange = (blockId, value) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [blockId]: value,
    }));
  };

  const handleSubmit = async () => {
    const formData = {
      selected,
      subSelected,
      selectedIndex,
      checkboxState,
    };

    try {
      const response = await fetch('http://localhost:8000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Ошибка отправки');

      const data = await response.json();
      console.log('Успешно отправлено:', data);
      alert('Данные успешно отправлены!');
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка при отправке данных.');
    }
  };

  const renderField = (block) => {
    let data = [];

    if (block.type === 'ddl') {
      if (Array.isArray(block.data)) {
        data = block.data;
      } else {
        switch (block.data) {
          case 'carBrands.json':
            data = carBrands;
            break;
          case 'carModels.json':
            const brandObj = carModels.find(item => item.brand === selectedBrand);
            data = brandObj ? brandObj.data : [];
            break;
          case 'years.json':
            data = years;
            break;
          case 'months.json':
            data = months;
            break;
          case 'bodyType.json':
            data = bodyType;
            break;
          case 'fuelType.json':
            data = fuelType;
            break;
          case 'color.json':
            data = color;
            break;
          default:
            data = [];
        }
      }
    }

    switch (block.type) {
      case 'txt':
      case 'float':
        return (
          <div className="col-sm-6 mb-2" key={block.id}>
            <div className="card shadow-sm p-2">
              <div className="card-body p-2">
                <label htmlFor={block.id} className="form-label" style={{ fontSize: '0.85rem' }}>
                  {block.id}
                </label>
                <input
                  id={block.id}
                  type={block.type === 'float' ? 'number' : 'text'}
                  step={block.type === 'float' ? '0.01' : undefined}
                  maxLength={block.txtSymbols || undefined}
                  className="form-control form-control-sm"
                  placeholder={block.name || block.title1 || block.title}
                  onChange={(e) =>
                    setCheckboxState((prevState) => ({
                      ...prevState,
                      [block.id]: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
        );
      case 'longTxt':
        return (
          <div className="col-sm-6 mb-2" key={block.id}>
            <div className="card shadow-sm p-2">
              <div className="card-body p-2">
                <label htmlFor={block.id} className="form-label" style={{ fontSize: '0.85rem' }}>
                  {block.id}
                </label>
                <textarea
                  id={block.id}
                  className="form-control form-control-sm"
                  maxLength={block.txtSymbols || undefined}
                  placeholder={block.name || block.title1 || block.title}
                  onChange={(e) =>
                    setCheckboxState((prevState) => ({
                      ...prevState,
                      [block.id]: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
        );
      case 'checkbox':
        return (
          <div className="col-sm-6 mb-2" key={block.id}>
            <div className="card shadow-sm p-2">
              <div className="card-body d-flex align-items-center p-2">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  id={block.id}
                  checked={checkboxState[block.id] || false}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor={block.id} style={{ fontSize: '0.85rem' }}>
                  {block.id}
                </label>
              </div>
            </div>
          </div>
        );
      case 'ddl':
        return (
          <div className="col-sm-6 mb-2" key={block.id}>
            <div className="card shadow-sm p-2">
              <div className="card-body p-2">
                <label htmlFor={block.id} className="form-label" style={{ fontSize: '0.85rem' }}>
                  {block.id}
                </label>
                <select
                  className="form-select form-select-sm"
                  id={block.id}
                  onChange={(e) => {
                    if (block.data === 'carBrands.json') {
                      setSelectedBrand(e.target.value);
                    }
                    setCheckboxState((prevState) => ({
                      ...prevState,
                      [block.id]: e.target.value,
                    }));
                  }}
                >
                  <option value="">Выберите</option>
                  {data.length > 0 ? (
                    data.map((opt, idx) => (
                      <option key={`${block.id}-${idx}`} value={opt}>
                        {opt}
                      </option>
                    ))
                  ) : (
                    <option>Нет данных</option>
                  )}
                </select>
              </div>
            </div>
          </div>
        );
      case 'radeo':
        return (
          <div className="col-sm-6 mb-2" key={block.id}>
            <div className="card shadow-sm p-2">
              <div className="card-body p-2">
                <label className="form-label" style={{ fontSize: '0.85rem' }}>
                  {block.id}
                </label>
                {block.data.map((option, idx) => (
                  <div className="form-check" key={`${block.id}-${idx}`}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name={block.id}
                      id={`${block.id}-${idx}`}
                      value={option}
                      checked={checkboxState[block.id] === option}
                      onChange={() => handleRadioChange(block.id, option)}
                    />
                    <label className="form-check-label" htmlFor={`${block.id}-${idx}`} style={{ fontSize: '0.85rem' }}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderBlockWithSubfields = (block) => (
    <div key={block.block || block.id} className="mb-2">
      <div className="border rounded p-2 shadow-sm bg-light">
        <h6 className="mb-2 text-primary" style={{ fontSize: '0.95rem' }}>
          {block.name || block.title1 || block.title}
        </h6>
        <div className="row g-2">
          {block.filesds && block.filesds.flat().map(field => renderField(field))}
          {block.subblocks && renderBlocks(block.subblocks)}
        </div>
      </div>
    </div>
  );

  const renderBlocks = (blocks) => blocks.map(block => renderBlockWithSubfields(block));

  return (
    <AdminAppLayout>
      <div className="p-2 small-form">
        <h1 style={{ fontSize: '1.2rem' }}>{t('login')} Успешен!</h1>
        <p style={{ fontSize: '0.9rem' }}>Вы вошли в систему. Используйте меню для навигации.</p>

        <div className="dropdown mt-2">
          <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {selected ? selected.label : 'Выберите категорию'}
          </button>
          <ul className="dropdown-menu p-1" style={{ minWidth: '200px' }}>
            <li>
              <input type="text" className="form-control form-control-sm mb-2" placeholder="Поиск..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </li>
            <li>
              <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {filteredOptions.map((option, index) => (
                  <button
                    key={option.path || index}
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleSelect(option, index)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>

        {selectedIndex === 0 && (
          <div className="dropdown mt-2">
            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {subSelected ? subSelected : 'Выберите подкатегорию'}
            </button>
            <ul className="dropdown-menu p-1" style={{ minWidth: '200px' }}>
              <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {carCategories.map((category, index) => (
                  <button
                    key={category || index}
                    className="dropdown-item"
                    type="button"
                    onClick={() => setSubSelected(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ul>
          </div>
        )}

        {subSelected && (
          <div className="mt-2">
            <h6 style={{ fontSize: '1rem' }}>Блоки для {subSelected}</h6>
            {renderBlocks(getSubcategoryBlocks(subSelected))}
          </div>
        )}

        <button
          className="btn btn-primary mt-3"
          type="button"
          onClick={handleSubmit}
        >
          Отправить
        </button>
      </div>
    </AdminAppLayout>
  );
};

export default CreateAdvertPage;
