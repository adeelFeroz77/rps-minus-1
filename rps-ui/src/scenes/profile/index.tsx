import { useState } from "react";
import { User, Mail, Trophy, Shield, Bell, Eye, Camera, Save, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type NotificationSetting = {
    id: string;
    label: string;
    description: string;
    enabled: boolean;
};
type PrivacySetting = {
    id: string;
    label: string;
    description: string;
    enabled: boolean;
};

const index = () => {
    const [avatar, setAvatar] = useState("https://api.dicebear.com/7.x/avataaars/svg?seed=player");
    const [notifications, setNotifications] = useState<NotificationSetting[]>([
        { id: "game-invites", label: "Game Invites", description: "Receive notifications for game invites", enabled: true },
        { id: "friend-requests", label: "Friend Requests", description: "Receive notifications for friend requests", enabled: true },
        { id: "achievements", label: "Achievements", description: "Receive notifications for new achievements", enabled: false }
    ]);
    const [privacySettings, setPrivacySettings] = useState<PrivacySetting[]>([
        { id: "public-profile", label: "Public Profile", description: "Allow others to view your profile", enabled: true },
        { id: "show-status", label: "Online Status", description: "Show your online status to others", enabled: true },
        { id: "show-stats", label: "Game Statistics", description: "Make your game statistics public", enabled: true }
    ]);

    const toggleNotification = (id: string) => {
        setNotifications(notifications.map(notification => notification.id === id ? { ...notification, enabled: !notification.enabled } : notification));
    };
    const togglePrivacy = (id: string) => {
        setPrivacySettings(settings => settings.map(setting => setting.id === id ? { ...setting, enabled: !setting.enabled } : setting));
    };

    return (
        <div className="w-full min-h-screen bg-white text-slate-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/" className="bg-slate-100 p-2 rounded-lg hover:bg-slate-200 transition">
                        <ArrowLeft className="w-6 h-6 text-slate-600" />
                    </Link>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">Profile Settings</h1>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Left Column - Avatar & Stats */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <img src={avatar} alt="Profile Avatar" className="w-full h-full rounded-full bg-slate-100" />
                                <button className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition">
                                    <Camera className="w-5 h-5 text-white" />
                                </button>
                            </div>
                            <div className="text-center">
                                <h2 className="font-bold text-xl mb-1 text-slate-800">PlayerOne</h2>
                                <p className="text-slate-600 text-sm">Member since 2024</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                            <h3 className="font-semibold mb-4 flex items-center gap-2 text-slate-800">
                                <Trophy className="w-5 h-5 text-blue-600" />
                                Statistics
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-sm text-slate-600">Rating</div>
                                    <div className="font-bold text-2xl text-slate-800">1,480</div>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-600">Win Rate</div>
                                    <div className="font-bold text-2xl text-slate-800">68%</div>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-600">Matches Played</div>
                                    <div className="font-bold text-2xl text-slate-800">142</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Settings */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Personal Information */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                            <h3 className="font-semibold mb-4 flex items-center gap-2 text-slate-800">
                                <User className="w-5 h-5 text-blue-600" />
                                Personal Information
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-slate-600 block mb-1">
                                        Display Name
                                    </label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition" 
                                        defaultValue="PlayerOne" 
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-slate-600 block mb-1">
                                        Email
                                    </label>
                                    <input 
                                        type="email" 
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition" 
                                        defaultValue="player@example.com" 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Notification Settings */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                            <h3 className="font-semibold mb-4 flex items-center gap-2 text-slate-800">
                                <Bell className="w-5 h-5 text-blue-600" />
                                Notification Settings
                            </h3>
                            <div className="space-y-4">
                                {notifications.map(notification => (
                                    <div key={notification.id} className="flex items-center justify-between">
                                        <div>
                                            <div className="font-medium text-slate-800">{notification.label}</div>
                                            <div className="text-sm text-slate-600">{notification.description}</div>
                                        </div>
                                        <button 
                                            onClick={() => toggleNotification(notification.id)} 
                                            className={`w-12 h-6 rounded-full transition-colors ${notification.enabled ? "bg-blue-600" : "bg-slate-200"}`}
                                        >
                                            <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${notification.enabled ? "translate-x-7" : "translate-x-1"}`} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Privacy Settings */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                            <h3 className="font-semibold mb-4 flex items-center gap-2 text-slate-800">
                                <Shield className="w-5 h-5 text-blue-600" />
                                Privacy Settings
                            </h3>
                            <div className="space-y-4">
                                {privacySettings.map(setting => (
                                    <div key={setting.id} className="flex items-center justify-between">
                                        <div>
                                            <div className="font-medium text-slate-800">{setting.label}</div>
                                            <div className="text-sm text-slate-600">{setting.description}</div>
                                        </div>
                                        <button 
                                            onClick={() => togglePrivacy(setting.id)} 
                                            className={`w-12 h-6 rounded-full transition-colors ${setting.enabled ? "bg-blue-600" : "bg-slate-200"}`}
                                        >
                                            <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${setting.enabled ? "translate-x-7" : "translate-x-1"}`} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end">
                            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg transition flex items-center gap-2 text-white font-semibold">
                                <Save className="w-5 h-5" />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;