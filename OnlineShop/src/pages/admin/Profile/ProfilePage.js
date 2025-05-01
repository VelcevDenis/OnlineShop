import React, { useState, useEffect } from 'react';
import AdminAppLayout from '../../../components/admin/AdminAppLayout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { changePassword, updateUserProfile, fetchUserProfile } from '../../../services/userService';
import { mapFieldChange, fieldMap } from '../../../maps/profileFieldMapper';
import countries from '../../../staticJSON/countries.json';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { data } = await fetchUserProfile();
        setUserData(data);
      } catch (err) {
        toast.error('Ошибка загрузки профиля');
      }
    };
    loadProfile();
  }, []);

  const handleChange = (e) => mapFieldChange(e, setUserData);

  const handleCountryChange = (e) => {
    const selectedCountryCode = e.target.value;
    const countryData = countries.find((c) => c.country === selectedCountryCode);
  
    setUserData((prevData) => ({
      ...prevData,
      country: selectedCountryCode,
      callingCode: countryData ? countryData.callingCode : '',
    }));
  };

  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(userData);
      toast.success('Профиль обновлён успешно');
    } catch (error) {
      toast.error('Ошибка при обновлении профиля');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error('Новые пароли не совпадают');
      return;
    }

    try {
      setLoading(true);
      await changePassword(currentPassword, newPassword);
      toast.success('Пароль успешно изменен');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Ошибка при смене пароля');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminAppLayout>
      <ToastContainer />
      <section className="p-4">
        <div className="container">
          <div className="row gy-4 gy-lg-0">
            <div className="col-12 col-lg-4 col-xl-3">
              <div className="row gy-4">
                <div className="col-12">
                  <div className="card widget-card border-light shadow-sm">
                    <div className="card-header text-bg-primary">
                      Welcome, {userData.first_name} {userData.last_name}
                    </div>
                    <div className="card-body text-center">
                      <img
                        src="/images/default-user.jpg"
                        className="img-fluid rounded-circle mb-3"
                        alt="Profile"
                      />
                      <h5 className="mb-1">
                        {userData.first_name} {userData.last_name}
                      </h5>
                      <p className="text-secondary mb-3">Project Manager</p>
                      <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item d-flex justify-content-between">
                          <strong>Orders:</strong> <span>0</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <strong>Active Orders:</strong> <span>0</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <strong>Unactive Orders:</strong> <span>0</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8 col-xl-9">
              <div className="card widget-card border-light shadow-sm">
                <div className="card-body p-4">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                        type="button"
                      >
                        Profile
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === 'password' ? 'active' : ''}`}
                        onClick={() => setActiveTab('password')}
                        type="button"
                      >
                        Password
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content pt-4">
                    {activeTab === 'profile' && (
                      <div className="tab-pane fade show active">
                        <form className="row gy-3" onSubmit={handleSubmitProfile}>
                          {/* First Name */}
                          <div className="col-12 col-md-6">
                            <label htmlFor="inputFirstName" className="form-label">First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputFirstName"
                              value={userData.first_name || ''}
                              onChange={handleChange}
                            />
                          </div>

                          {/* Last Name */}
                          <div className="col-12 col-md-6">
                            <label htmlFor="inputLastName" className="form-label">Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputLastName"
                              value={userData.last_name || ''}
                              onChange={handleChange}
                            />
                          </div>

                          {/* Calling Code */}
                          <div className="col-12 col-md-6">
                            <label htmlFor="inputCallingCode" className="form-label">Calling Code</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputCallingCode"
                              value={userData.callingCode || ''}
                              readOnly
                            />
                          </div>

                          {/* Phone */}
                          <div className="col-12 col-md-6">
                            <label htmlFor="inputPhone" className="form-label">Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPhone"
                              value={userData.phone || ''}
                              onChange={handleChange}
                            />
                          </div>

                          {/* Country */}
                          <div className="col-12 col-md-6">
                            <label htmlFor="inputCountry" className="form-label">Country</label>
                            <select
                              id="inputCountry"
                              className="form-select"
                              value={userData.country || ''}
                              onChange={handleCountryChange}
                            >
                              <option value="">Select Country</option>
                              {countries.map((country) => (
                                <option key={country.country} value={country.country}>
                                  {country.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* City */}
                          <div className="col-12 col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputCity"
                              value={userData.city || ''}
                              onChange={handleChange}
                            />
                          </div>

                          {/* Postal Code */}
                          <div className="col-12 col-md-6">
                            <label htmlFor="inputPostalCode" className="form-label">Postal Code</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputPostalCode"
                              value={userData.postalCode || ''}
                              onChange={handleChange}
                            />
                          </div>

                          {/* Address Line */}
                          <div className="col-12 col-md-6">
                            <label htmlFor="inputAddressLine" className="form-label">Address Line</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputAddressLine"
                              value={userData.addressLine || ''}
                              onChange={handleChange}
                            />
                          </div>

                          {/* Date of Birth */}
                          <div className="col-12 col-md-6">
                            <label htmlFor="inputDateOfBirth" className="form-label">Date of Birth</label>
                            <input
                              type="date"
                              className="form-control"
                              id="inputDateOfBirth"
                              value={userData.dateOfBirth || ''}
                              onChange={handleChange}
                            />
                          </div>

                          {/* Gender */}
                          <div className="col-12 col-md-6">
                            <label htmlFor="inputGender" className="form-label">Gender</label>
                            <select
                              id="inputGender"
                              className="form-select"
                              value={userData.gender || 'male'}
                              onChange={(e) =>
                                setUserData((prev) => ({ ...prev, gender: e.target.value }))
                              }
                            >
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>

                          <div className="col-12">
                            <button type="submit" className="btn btn-primary">Save Changes</button>
                          </div>
                        </form>
                      </div>
                    )}

                    {activeTab === 'password' && (
                      <div className="tab-pane fade show active">
                        <form className="row gy-3" onSubmit={handleChangePassword}>
                          <div className="col-12 col-md-6">
                            <label className="form-label">Current Password</label>
                            <input
                              type="password"
                              className="form-control"
                              value={currentPassword}
                              onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                          </div>
                          <div className="col-12 col-md-6">
                            <label className="form-label">New Password</label>
                            <input
                              type="password"
                              className="form-control"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                            />
                          </div>
                          <div className="col-12 col-md-6">
                            <label className="form-label">Confirm Password</label>
                            <input
                              type="password"
                              className="form-control"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                              {loading ? 'Updating...' : 'Change Password'}
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </AdminAppLayout>
  );
};

export default ProfilePage;
