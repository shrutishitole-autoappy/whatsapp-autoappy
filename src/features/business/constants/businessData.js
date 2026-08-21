import {
  MessageCircle,
  MessageSquare,
  UserPlus,
  UserCheck,
  HelpCircle,
  Database,
  TrendingUp,
  UploadCloud,
  Bell,
  BarChart3,
  CheckCircle2,
  Search,
  RefreshCw,
  Package,
  Truck,
  CalendarCheck,
  CalendarClock,
  Clock,
  CreditCard,
  Send,
  Star,
  RotateCcw,
  Plus,
  Sparkles,
  Settings,
  ShieldCheck,
  Circle,
  Zap,
  Users,
  FileText,
  Megaphone,
  ThumbsUp,
  Layers,
  ClipboardList,
  BookOpen,
  Tag,
  PackageCheck,
  Wallet,
  Receipt,
  Smile,
  UserX,
  Mail,
  Link2,
} from "lucide-react";

/* ---------------------------------------------------------------- */
/* THEME COLORS & PALETTES                                          */
/* ---------------------------------------------------------------- */

export const C = {
  green: { text: "#128C4A", bg: "#DCFCE7", solid: "#22C55E", ring: "#86EFAC" },
  blue: { text: "#1D4ED8", bg: "#DBEAFE", solid: "#2563EB", ring: "#93C5FD" },
  purple: { text: "#6D28D9", bg: "#EDE9FE", solid: "#8B5CF6", ring: "#C4B5FD" },
  orange: { text: "#C2410C", bg: "#FFEDD5", solid: "#F97316", ring: "#FDBA74" },
  yellow: { text: "#A16207", bg: "#FEF9C3", solid: "#EAB308", ring: "#FDE047" },
};

export const CYCLE = ["green", "blue", "purple", "orange", "green", "blue", "yellow", "purple"];
export const WA_GREEN = "#25D366";
export const WA_DARK = "#128C7E";
export const INK = "#0F172A";
export const MUTED = "#64748B";
export const BORDER = "#E7ECF3";
export const CANVAS = "#F7F9FC";

/* WhatsApp-style doodle wallpaper, generated as an inline SVG tile */
export const WA_PATTERN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
  <g stroke="#D9CFBE" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.9">
    <g transform="translate(14,20) rotate(-10)">
      <rect x="0" y="8" width="24" height="18" rx="2"/>
      <rect x="-2" y="2" width="28" height="7" rx="2"/>
      <line x1="12" y1="2" x2="12" y2="26"/>
      <path d="M12 2c-4-6-12-4-9 2c2 3 9 2 9-2Z"/>
      <path d="M12 2c4-6 12-4 9 2c-2 3-9 2-9-2Z"/>
    </g>
    <g transform="translate(150,14) rotate(8)">
      <rect x="0" y="6" width="30" height="20" rx="3"/>
      <rect x="9" y="0" width="10" height="6" rx="1"/>
      <circle cx="15" cy="16" r="6"/>
    </g>
    <g transform="translate(68,66) rotate(-6)">
      <path d="M12 22 C-6 10 0-4 12 4 C24-4 30 10 12 22Z"/>
    </g>
    <g transform="translate(188,84) rotate(10)">
      <path d="M12 0 L15 8 L24 8 L17 13 L19 22 L12 17 L5 22 L7 13 L0 8 L9 8 Z"/>
    </g>
    <g transform="translate(24,118) rotate(6)">
      <rect x="0" y="0" width="28" height="18" rx="2"/>
      <path d="M0 2 L14 12 L28 2"/>
    </g>
    <g transform="translate(136,136) rotate(-18)">
      <path d="M0 12 L26 0 L14 26 L11 15 L0 12Z"/>
      <line x1="14" y1="12" x2="26" y2="0"/>
    </g>
    <g transform="translate(198,176)">
      <circle cx="12" cy="12" r="11"/>
      <line x1="12" y1="12" x2="12" y2="5"/>
      <line x1="12" y1="12" x2="17" y2="14"/>
    </g>
    <g transform="translate(54,178) rotate(8)">
      <circle cx="4" cy="20" r="4"/>
      <line x1="8" y1="20" x2="8" y2="0"/>
      <line x1="8" y1="0" x2="18" y2="3"/>
      <line x1="18" y1="3" x2="18" y2="9"/>
    </g>
    <g transform="translate(108,24) rotate(-4)">
      <ellipse cx="10" cy="10" rx="9" ry="11"/>
      <path d="M10 21 L10 26"/>
      <path d="M8 26 L12 26 L10 30Z"/>
    </g>
    <g transform="translate(6,196) rotate(14)">
      <path d="M0 20 C0 6 14 0 22 0 C22 14 12 22 0 20Z"/>
      <line x1="0" y1="20" x2="18" y2="4"/>
    </g>
    <g transform="translate(166,214) rotate(-8)">
      <path d="M0 14 C0 2 22 2 22 14"/>
      <rect x="-2" y="12" width="7" height="10" rx="2"/>
      <rect x="17" y="12" width="7" height="10" rx="2"/>
    </g>
    <g transform="translate(96,206) rotate(5)">
      <rect x="0" y="4" width="18" height="16" rx="2"/>
      <path d="M18 8 C26 8 26 18 18 18"/>
      <line x1="4" y1="0" x2="4" y2="4"/>
      <line x1="9" y1="0" x2="9" y2="4"/>
      <line x1="14" y1="0" x2="14" y2="4"/>
    </g>
  </g>
</svg>`;

export const WA_PATTERN_URI = "data:image/svg+xml," + encodeURIComponent(WA_PATTERN_SVG);

export const wallpaperStyle = {
  backgroundColor: "#F6F1E6",
  backgroundImage: `url("${WA_PATTERN_URI}")`,
  backgroundSize: "240px 240px",
  backgroundRepeat: "repeat",
};

/* ---------------------------------------------------------------- */
/* SIDEBAR CONFIGURATION                                            */
/* ---------------------------------------------------------------- */

export const NAV = [
  { id: "how-it-works", icon: MessageCircle, label: "How WhatsApp Business Works", desc: "See the automation flow" },
  { id: "welcome", icon: UserPlus, label: "Welcome & Onboarding", desc: "Greet new customers" },
  { id: "leads", icon: TrendingUp, label: "Lead Generation", desc: "Capture & qualify leads" },
  { id: "support", icon: MessageSquare, label: "Customer Support", desc: "Automate support" },
  { id: "orders", icon: Package, label: "Order Management", desc: "Track & update orders" },
  { id: "appointments", icon: CalendarCheck, label: "Appointment Booking", desc: "Schedule appointments" },
  { id: "payments", icon: Wallet, label: "Payment Reminders", desc: "Send payment reminders" },
  { id: "broadcast", icon: Megaphone, label: "Broadcast Campaigns", desc: "Promotions & offers" },
  { id: "feedback", icon: Star, label: "Feedback Collection", desc: "Collect customer feedback" },
  { id: "reengage", icon: RotateCcw, label: "Re-engagement", desc: "Win back inactive users" },
];

/* ---------------------------------------------------------------- */
/* WORKFLOW PAGES DATA                                              */
/* ---------------------------------------------------------------- */

export const PAGES = {
  "how-it-works": {
    eyebrow: "WORKFLOW OVERVIEW",
    title: "How WhatsApp Business Works",
    subtitle: "From the first customer message to automated business growth.",
    sideCard: { title: "Automation Running Smoothly", desc: "Each step is executed automatically without any manual intervention.", note: "No actions required" },
    steps: [
      { icon: MessageCircle, title: "New Incoming Message", badge: "Completed", result: "Captured successfully",
        blocks: [{ type: "message", text: "Hi, I'm interested in your product." }] },
      { icon: UserPlus, title: "Capture Information", badge: "Completed", result: "Data captured",
        blocks: [{ type: "fields", items: [{ label: "Name", value: "Rahul Mehta" }, { label: "Phone", value: "+91 98765 43210" }, { label: "Email", value: "rahul.mehta@example.com" }] }] },
      { icon: HelpCircle, title: "Ask Qualification Questions", badge: "Completed", result: "Qualified successfully",
        blocks: [{ type: "fields", items: [{ label: "Questions asked", value: "4" }, { label: "Answers received", value: "4" }] }] },
      { icon: Database, title: "Validate & Enrich Data", badge: "Completed", result: "Data validated",
        blocks: [{ type: "note", text: "Data verified and enriched from sources" }] },
      { icon: TrendingUp, title: "Score Lead Quality", badge: "Completed", result: "Scored successfully",
        blocks: [{ type: "badges", items: [{ text: "Lead Score: 87/100", color: "green" }, { text: "Quality: High", color: "green" }] }] },
      { icon: UploadCloud, title: "Send to CRM", badge: "Completed", result: "Added to CRM",
        blocks: [{ type: "note", text: "Lead sent to CRM successfully" }] },
      { icon: Bell, title: "Notify Sales Team", badge: "Completed", result: "Team notified",
        blocks: [{ type: "note", text: "Sales team notified via WhatsApp & Email" }] },
      { icon: BarChart3, title: "Track & Analytics", badge: "Completed", result: "Tracked successfully",
        blocks: [{ type: "note", text: "Event tracked and analytics updated" }] },
    ],
    kpis: [
      { value: "10K+", label: "Active Businesses" },
      { value: "50M+", label: "Conversations" },
      { value: "25M+", label: "Leads Captured" },
      { value: "99.9%", label: "Uptime" },
      { value: "4.9/5", label: "Customer Rating" },
    ],
  },

  welcome: {
    eyebrow: "WORKFLOW OVERVIEW",
    title: "Welcome & Onboarding Automation",
    subtitle: "Automatically welcome new customers and guide them through their first interaction.",
    sideCard: { title: "Automation Running Smoothly", desc: "New customers are greeted and guided the moment they say hello.", note: "No actions required" },
    steps: [
      { icon: MessageCircle, title: "New Customer Starts Chat", badge: "Completed", result: "Captured successfully",
        blocks: [{ type: "message", text: "Hi, I just joined. How can I get started?" }] },
      { icon: Send, title: "Send Welcome Message", badge: "Message Sent", result: "Delivered",
        blocks: [{ type: "message", text: "Welcome to our business! 👋 We're excited to have you here." }] },
      { icon: UserCheck, title: "Identify Customer", badge: "Customer Identified", result: "Identified",
        blocks: [{ type: "fields", items: [{ label: "Name", value: "Priya Sharma" }, { label: "Phone", value: "+91 98765 12345" }, { label: "Source", value: "Website" }] }] },
      { icon: HelpCircle, title: "Ask Customer Needs", badge: "Completed", result: "Response received",
        blocks: [{ type: "note", text: "Customer Need: \"Product Demo\"" }] },
      { icon: BookOpen, title: "Share Getting Started Guide", badge: "Completed", result: "Guide sent",
        blocks: [{ type: "note", text: "Getting started guide shared via WhatsApp" }] },
      { icon: Tag, title: "Assign Customer Segment", badge: "Completed", result: "Segmented",
        blocks: [{ type: "badges", items: [{ text: "Segment: New User", color: "blue" }] }] },
      { icon: Bell, title: "Notify Team", badge: "Completed", result: "Team notified",
        blocks: [{ type: "note", text: "Onboarding team notified of new signup" }] },
      { icon: BarChart3, title: "Track Onboarding Progress", badge: "Onboarding Active", result: "Completed",
        blocks: [{ type: "badges", items: [{ text: "Onboarding Status: Completed", color: "green" }] }] },
    ],
    metrics: [
      { label: "Active Onboardings", value: "1,284", icon: UserPlus, color: "blue" },
      { label: "Completion Rate", value: "94.2%", icon: CheckCircle2, color: "green" },
      { label: "Avg. Time to Activate", value: "3m 12s", icon: Clock, color: "purple" },
      { label: "Customer Satisfaction", value: "4.8/5", icon: Smile, color: "yellow" },
    ],
    successRate: "94.2%",
    avgTime: "3m 12s",
    activity: ["Priya Sharma completed onboarding · 2m ago", "Welcome message sent to Arjun Nair · 5m ago", "New segment assigned to Fatima Khan · 9m ago"],
  },

  leads: {
    eyebrow: "WORKFLOW OVERVIEW",
    title: "Turn WhatsApp Conversations Into Qualified Leads",
    subtitle: "Capture, qualify and route every conversation straight into your CRM.",
    sideCard: { title: "Automation Running Smoothly", desc: "Every inbound message is scored and routed without manual work.", note: "No actions required" },
    steps: [
      { icon: MessageCircle, title: "New Incoming Message", badge: "Completed", result: "Captured successfully",
        blocks: [{ type: "message", text: "I'm interested in your enterprise plan." }] },
      { icon: UserPlus, title: "Capture Lead Information", badge: "Completed", result: "Data captured",
        blocks: [{ type: "fields", items: [{ label: "Name", value: "Rahul Mehta" }, { label: "Phone", value: "+91 98765 43210" }, { label: "Email", value: "rahul.mehta@example.com" }, { label: "Company", value: "TechNova" }] }] },
      { icon: HelpCircle, title: "Ask Qualification Questions", badge: "Completed", result: "Qualified",
        blocks: [{ type: "fields", items: [{ label: "Budget", value: "₹10L–₹25L" }, { label: "Timeline", value: "This Month" }, { label: "Team Size", value: "50+" }] }] },
      { icon: Database, title: "Validate & Enrich Data", badge: "Completed", result: "Data validated",
        blocks: [{ type: "note", text: "Company data enriched from public sources" }] },
      { icon: TrendingUp, title: "Score Lead Quality", badge: "Completed", result: "Scored",
        blocks: [{ type: "badges", items: [{ text: "Lead Score: 87/100", color: "green" }, { text: "High Quality", color: "green" }] }] },
      { icon: UploadCloud, title: "Send to CRM", badge: "Completed", result: "Synced",
        blocks: [{ type: "note", text: "Lead successfully added to Salesforce" }] },
      { icon: Bell, title: "Notify Sales Team", badge: "Completed", result: "Notified",
        blocks: [{ type: "note", text: "Assigned to Sales Rep: Ananya Iyer" }] },
      { icon: BarChart3, title: "Track Conversion", badge: "Completed", result: "Tracked",
        blocks: [{ type: "note", text: "Conversion funnel updated" }] },
    ],
    metrics: [
      { label: "Leads Captured Today", value: "312", icon: UserPlus, color: "blue" },
      { label: "Qualified Leads", value: "218", icon: ShieldCheck, color: "green" },
      { label: "Avg Lead Score", value: "76/100", icon: TrendingUp, color: "purple" },
      { label: "CRM Sync Rate", value: "99.4%", icon: UploadCloud, color: "orange" },
    ],
    successRate: "92%",
    avgTime: "1m 40s",
    activity: ["New lead scored 91/100 · TechNova · 1m ago", "Lead synced to Salesforce · Rahul Mehta · 4m ago", "Sales team notified · Ananya Iyer assigned · 6m ago"],
  },

  support: {
    eyebrow: "WORKFLOW OVERVIEW",
    title: "Automate Customer Support on WhatsApp",
    subtitle: "Resolve common issues instantly and escalate the rest to a human.",
    sideCard: { title: "Automation Running Smoothly", desc: "Most conversations are resolved before an agent ever sees them.", note: "No actions required" },
    steps: [
      { icon: MessageCircle, title: "Customer Sends Message", badge: "Completed", result: "Received",
        blocks: [{ type: "message", text: "My order hasn't arrived yet." }] },
      { icon: Search, title: "Detect Customer Intent", badge: "Completed", result: "Classified",
        blocks: [{ type: "badges", items: [{ text: "AI Intent: Order Tracking", color: "blue" }] }] },
      { icon: BookOpen, title: "Search Knowledge Base", badge: "Completed", result: "3 articles found",
        blocks: [{ type: "note", text: "Relevant help articles matched to intent" }] },
      { icon: Sparkles, title: "Generate Response", badge: "Completed", result: "Drafted",
        blocks: [{ type: "message", text: "Sure! Let me check your order status." }] },
      { icon: CheckCircle2, title: "Resolve Issue", badge: "Completed", result: "Resolved",
        blocks: [{ type: "fields", items: [{ label: "Order", value: "#WP10245" }, { label: "Status", value: "Out for Delivery" }, { label: "Expected", value: "Today, 6:30 PM" }] }] },
      { icon: UserX, title: "Escalate If Needed", badge: "Not Required", result: "Auto-resolved",
        blocks: [{ type: "note", text: "Issue resolved automatically — no escalation needed" }] },
      { icon: Bell, title: "Notify Support Agent", badge: "Completed", result: "Logged",
        blocks: [{ type: "note", text: "Conversation logged to support dashboard" }] },
      { icon: BarChart3, title: "Track Resolution", badge: "Completed", result: "Tracked",
        blocks: [{ type: "note", text: "Resolution time recorded: 45s" }] },
    ],
    metrics: [
      { label: "Response Time", value: "8s", icon: Clock, color: "blue" },
      { label: "Resolution Rate", value: "96%", icon: CheckCircle2, color: "green" },
      { label: "Open Tickets", value: "14", icon: ClipboardList, color: "orange" },
      { label: "Escalations", value: "6%", icon: UserX, color: "purple" },
    ],
    successRate: "96%",
    avgTime: "45s",
    activity: ["Order tracking issue resolved automatically · 1m ago", "Refund query escalated to agent · 3m ago", "Knowledge base article matched · 7m ago"],
  },

  orders: {
    eyebrow: "WORKFLOW OVERVIEW",
    title: "Automate Order Updates & Delivery Notifications",
    subtitle: "Keep customers informed automatically from checkout to delivery.",
    sideCard: { title: "Order #WP10245", desc: "Priya Sharma · ₹4,999", note: "Live tracking" },
    steps: [
      { icon: FileText, title: "Order Created", badge: "Completed", result: "Created",
        blocks: [{ type: "fields", items: [{ label: "Order", value: "#WP10245" }, { label: "Customer", value: "Priya Sharma" }, { label: "Amount", value: "₹4,999" }] }] },
      { icon: CheckCircle2, title: "Order Confirmed", badge: "Completed", result: "Confirmed",
        blocks: [{ type: "list", items: [{ text: "Order Confirmed", done: true }] }] },
      { icon: CreditCard, title: "Payment Verified", badge: "Completed", result: "Verified",
        blocks: [{ type: "list", items: [{ text: "Payment Verified", done: true }] }] },
      { icon: RefreshCw, title: "Order Processing", badge: "Completed", result: "Processed",
        blocks: [{ type: "list", items: [{ text: "Processing", done: true }] }] },
      { icon: Package, title: "Order Shipped", badge: "Completed", result: "Shipped",
        blocks: [{ type: "list", items: [{ text: "Shipped", done: true }] }] },
      { icon: Truck, title: "Out for Delivery", badge: "In Progress", result: "En route",
        blocks: [{ type: "message", text: "Your order #WP10245 is out for delivery 🚚" }] },
      { icon: PackageCheck, title: "Delivered", badge: "Pending", result: "Awaiting",
        blocks: [{ type: "list", items: [{ text: "Delivered", done: false }] }] },
      { icon: Star, title: "Request Feedback", badge: "Scheduled", result: "Queued",
        blocks: [{ type: "note", text: "Feedback request scheduled after delivery" }] },
    ],
    metrics: [
      { label: "Orders Processed", value: "1,842", icon: Package, color: "blue" },
      { label: "On-Time Delivery Rate", value: "97.1%", icon: Truck, color: "green" },
      { label: "Avg Fulfillment Time", value: "1d 4h", icon: Clock, color: "purple" },
      { label: "Feedback Requests Sent", value: "1,690", icon: Star, color: "yellow" },
    ],
    successRate: "97.1%",
    avgTime: "1d 4h",
    activity: ["Order #WP10245 out for delivery · 2m ago", "Payment verified for order #WP10238 · 6m ago", "Order #WP10230 delivered · 12m ago"],
  },

  appointments: {
    eyebrow: "WORKFLOW OVERVIEW",
    title: "Automate Appointment Booking on WhatsApp",
    subtitle: "Let customers find, book and confirm appointments without back-and-forth.",
    sideCard: { title: "Automation Running Smoothly", desc: "Slots are booked, confirmed and reminded automatically.", note: "No actions required" },
    steps: [
      { icon: MessageCircle, title: "Customer Requests Appointment", badge: "Completed", result: "Received",
        blocks: [{ type: "message", text: "I want to book a consultation." }] },
      { icon: HelpCircle, title: "Identify Service", badge: "Completed", result: "Identified",
        blocks: [{ type: "fields", items: [{ label: "Service", value: "Business Consultation" }] }] },
      { icon: CalendarClock, title: "Show Available Slots", badge: "Completed", result: "Shown",
        blocks: [{ type: "badges", items: [{ text: "10:00 AM", color: "blue" }, { text: "12:30 PM", color: "blue" }, { text: "3:00 PM", color: "blue" }] }] },
      { icon: UserCheck, title: "Customer Selects Slot", badge: "Completed", result: "Selected",
        blocks: [{ type: "fields", items: [{ label: "Selected", value: "12:30 PM — 24 August" }] }] },
      { icon: CheckCircle2, title: "Confirm Appointment", badge: "Completed", result: "Confirmed",
        blocks: [{ type: "message", text: "Your appointment is confirmed." }] },
      { icon: CalendarCheck, title: "Add to Calendar", badge: "Completed", result: "Added",
        blocks: [{ type: "note", text: "Appointment added to business calendar" }] },
      { icon: Bell, title: "Send Reminder", badge: "Scheduled", result: "Queued",
        blocks: [{ type: "note", text: "Reminder scheduled for 1 hour before" }] },
      { icon: RefreshCw, title: "Follow Up", badge: "Scheduled", result: "Queued",
        blocks: [{ type: "note", text: "Follow-up message scheduled after appointment" }] },
    ],
    metrics: [
      { label: "Appointments Booked", value: "428", icon: CalendarCheck, color: "blue" },
      { label: "Show-up Rate", value: "91%", icon: CheckCircle2, color: "green" },
      { label: "Avg Booking Time", value: "52s", icon: Clock, color: "purple" },
      { label: "Reminders Sent", value: "402", icon: Bell, color: "orange" },
    ],
    successRate: "91%",
    avgTime: "52s",
    activity: ["Appointment confirmed for 12:30 PM · 2m ago", "Reminder sent to Karan Verma · 5m ago", "New slot booked for 24 August · 8m ago"],
  },

  payments: {
    eyebrow: "WORKFLOW OVERVIEW",
    title: "Automate Payment Reminders",
    subtitle: "Chase invoices automatically and get paid faster.",
    sideCard: { title: "Invoice #INV-2048", desc: "₹25,000 · Due 25 Aug 2026", note: "Reminder active" },
    steps: [
      { icon: FileText, title: "Invoice Created", badge: "Completed", result: "Created",
        blocks: [{ type: "fields", items: [{ label: "Invoice", value: "#INV-2048" }, { label: "Amount", value: "₹25,000" }, { label: "Due Date", value: "25 Aug 2026" }] }] },
      { icon: Clock, title: "Payment Due Detected", badge: "Completed", result: "Detected",
        blocks: [{ type: "note", text: "Due date approaching — reminder triggered" }] },
      { icon: Bell, title: "Send Reminder", badge: "Completed", result: "Sent",
        blocks: [{ type: "message", text: "Your payment of ₹25,000 is due tomorrow." }, { type: "buttons", items: ["Pay Now", "View Invoice"] }] },
      { icon: MessageCircle, title: "Customer Opens Message", badge: "Completed", result: "Opened",
        blocks: [{ type: "note", text: "Message read at 9:42 AM" }] },
      { icon: Link2, title: "Payment Link Sent", badge: "Completed", result: "Sent",
        blocks: [{ type: "note", text: "Secure payment link delivered" }] },
      { icon: CreditCard, title: "Payment Completed", badge: "Completed", result: "Paid",
        blocks: [{ type: "badges", items: [{ text: "Payment Successful", color: "green" }] }] },
      { icon: Receipt, title: "Receipt Generated", badge: "Completed", result: "Sent",
        blocks: [{ type: "badges", items: [{ text: "Receipt Sent", color: "green" }] }] },
      { icon: Database, title: "Update Records", badge: "Completed", result: "Updated",
        blocks: [{ type: "badges", items: [{ text: "CRM Updated", color: "green" }] }] },
    ],
    metrics: [
      { label: "Invoices Sent", value: "236", icon: FileText, color: "blue" },
      { label: "Payments Collected", value: "₹18.4L", icon: Wallet, color: "green" },
      { label: "On-Time Payment Rate", value: "88%", icon: CheckCircle2, color: "purple" },
      { label: "Overdue Invoices", value: "9", icon: Clock, color: "orange" },
    ],
    successRate: "88%",
    avgTime: "1d 6h",
    activity: ["Invoice #INV-2048 paid · 3m ago", "Reminder sent for #INV-2044 · 7m ago", "Receipt generated for #INV-2039 · 15m ago"],
  },

  broadcast: {
    eyebrow: "WORKFLOW OVERVIEW",
    title: "Run Targeted WhatsApp Broadcast Campaigns",
    subtitle: "Plan, segment and send campaigns your customers actually open.",
    sideCard: { title: "Independence Day Offer 🇮🇳", desc: "Audience: 12,450 customers", note: "Campaign live" },
    steps: [
      { icon: Megaphone, title: "Create Campaign", badge: "Completed", result: "Created",
        blocks: [{ type: "fields", items: [{ label: "Campaign", value: "Independence Day Offer 🇮🇳" }] }] },
      { icon: Users, title: "Select Audience", badge: "Completed", result: "Selected",
        blocks: [{ type: "fields", items: [{ label: "Audience", value: "12,450 customers" }] }] },
      { icon: Layers, title: "Segment Customers", badge: "Completed", result: "Segmented",
        blocks: [{ type: "note", text: "Segmented by purchase history and location" }] },
      { icon: MessageSquare, title: "Create Message", badge: "Completed", result: "Drafted",
        blocks: [{ type: "message", text: "Get 25% OFF this Independence Day." }] },
      { icon: Search, title: "Preview Campaign", badge: "Completed", result: "Reviewed",
        blocks: [{ type: "note", text: "Preview approved across device sizes" }] },
      { icon: CalendarClock, title: "Schedule Broadcast", badge: "Completed", result: "Scheduled",
        blocks: [{ type: "note", text: "Scheduled for 9:00 AM IST" }] },
      { icon: Send, title: "Send Messages", badge: "Completed", result: "Sent",
        blocks: [{ type: "note", text: "Broadcast dispatched to full audience" }] },
      { icon: BarChart3, title: "Track Results", badge: "Completed", result: "Tracked",
        blocks: [{ type: "badges", items: [{ text: "12,450 Sent", color: "blue" }, { text: "10,820 Delivered", color: "green" }, { text: "7,420 Read", color: "purple" }, { text: "1,240 Clicked", color: "orange" }, { text: "420 Converted", color: "green" }] }] },
    ],
    metrics: [
      { label: "Sent", value: "12,450", icon: Send, color: "blue" },
      { label: "Delivered", value: "10,820", icon: CheckCircle2, color: "green" },
      { label: "Read", value: "7,420", icon: MessageSquare, color: "purple" },
      { label: "Converted", value: "420", icon: TrendingUp, color: "orange" },
    ],
    successRate: "86.9%",
    avgTime: "12m to send",
    activity: ["Campaign reached 10,820 customers · 4m ago", "420 conversions tracked · 9m ago", "New segment created: High Spenders · 20m ago"],
  },

  feedback: {
    eyebrow: "WORKFLOW OVERVIEW",
    title: "Collect Customer Feedback Automatically",
    subtitle: "Turn every completed order into a rating and a signal.",
    sideCard: { title: "Automation Running Smoothly", desc: "Feedback is requested, read and routed automatically.", note: "No actions required" },
    steps: [
      { icon: PackageCheck, title: "Order Completed", badge: "Completed", result: "Detected",
        blocks: [{ type: "note", text: "Order #WP10245 marked as delivered" }] },
      { icon: Clock, title: "Wait for Customer", badge: "Completed", result: "Timed",
        blocks: [{ type: "note", text: "Waited 2 hours before requesting feedback" }] },
      { icon: Star, title: "Send Feedback Request", badge: "Completed", result: "Sent",
        blocks: [{ type: "message", text: "How was your experience? ★★★★★" }] },
      { icon: MessageCircle, title: "Customer Responds", badge: "Completed", result: "Responded",
        blocks: [{ type: "fields", items: [{ label: "Customer Rating", value: "5/5" }] }] },
      { icon: Sparkles, title: "Analyze Sentiment", badge: "Completed", result: "Analyzed",
        blocks: [{ type: "badges", items: [{ text: "Sentiment: Positive", color: "green" }] }] },
      { icon: Database, title: "Store Feedback", badge: "Completed", result: "Stored",
        blocks: [{ type: "note", text: "\"Excellent service and very fast delivery.\"" }] },
      { icon: Bell, title: "Alert Team", badge: "Completed", result: "Notified",
        blocks: [{ type: "note", text: "Positive review shared with team" }] },
      { icon: BarChart3, title: "Track Rating", badge: "Completed", result: "Tracked",
        blocks: [{ type: "note", text: "Average rating updated" }] },
    ],
    metrics: [
      { label: "Average Rating", value: "4.7/5", icon: Star, color: "yellow" },
      { label: "Responses", value: "3,204", icon: MessageSquare, color: "blue" },
      { label: "Positive Feedback", value: "91%", icon: ThumbsUp, color: "green" },
      { label: "Negative Feedback", value: "9%", icon: UserX, color: "orange" },
    ],
    successRate: "78%",
    avgTime: "38s",
    activity: ["5-star review received · Priya Sharma · 1m ago", "Feedback request sent · Order #WP10251 · 6m ago", "Sentiment analyzed as Positive · 10m ago"],
  },

  reengage: {
    eyebrow: "WORKFLOW OVERVIEW",
    title: "Bring Inactive Customers Back",
    subtitle: "Spot customers going quiet and win them back with the right message.",
    sideCard: { title: "Automation Running Smoothly", desc: "Inactive customers are detected and re-engaged automatically.", note: "No actions required" },
    steps: [
      { icon: UserX, title: "Detect Inactive Customer", badge: "Completed", result: "Detected",
        blocks: [{ type: "fields", items: [{ label: "Customer", value: "Anita Sharma" }, { label: "Inactive For", value: "45 Days" }] }] },
      { icon: Search, title: "Analyze Previous Activity", badge: "Completed", result: "Analyzed",
        blocks: [{ type: "fields", items: [{ label: "Previous Interest", value: "Premium Plan" }] }] },
      { icon: Layers, title: "Segment Customer", badge: "Completed", result: "Segmented",
        blocks: [{ type: "badges", items: [{ text: "Segment: Dormant — High Intent", color: "purple" }] }] },
      { icon: Sparkles, title: "Create Personalized Message", badge: "Completed", result: "Drafted",
        blocks: [{ type: "message", text: "Hi Anita 👋 We noticed you were interested in our Premium Plan. We have a special offer for you." }] },
      { icon: Send, title: "Send WhatsApp Campaign", badge: "Completed", result: "Sent",
        blocks: [{ type: "note", text: "Personalized message delivered" }] },
      { icon: MessageCircle, title: "Customer Responds", badge: "Completed", result: "Replied",
        blocks: [{ type: "note", text: "Anita replied: \"Tell me more!\"" }] },
      { icon: RefreshCw, title: "Restart Conversation", badge: "Completed", result: "Reactivated",
        blocks: [{ type: "note", text: "Conversation handed to sales flow" }] },
      { icon: BarChart3, title: "Track Conversion", badge: "Completed", result: "Tracked",
        blocks: [{ type: "note", text: "Reactivation logged and scored" }] },
    ],
    metrics: [
      { label: "Messages Sent", value: "1,120", icon: Send, color: "blue" },
      { label: "Replies", value: "312", icon: MessageSquare, color: "purple" },
      { label: "Reactivated Customers", value: "184", icon: RotateCcw, color: "green" },
      { label: "Conversion Rate", value: "16.4%", icon: TrendingUp, color: "orange" },
    ],
    successRate: "16.4%",
    avgTime: "2d 3h",
    activity: ["Anita Sharma reactivated · 3m ago", "Re-engagement message sent to 40 customers · 11m ago", "Segment refreshed: Dormant 30+ days · 25m ago"],
  },
};

/* ---------------------------------------------------------------- */
/* CUSTOM AUTOMATION PALETTE BLOCKS                                 */
/* ---------------------------------------------------------------- */

export const PALETTE = [
  { type: "Trigger", icon: Zap, color: "green" },
  { type: "WhatsApp Message", icon: MessageCircle, color: "blue" },
  { type: "Capture Data", icon: UserPlus, color: "blue" },
  { type: "Ask Question", icon: HelpCircle, color: "purple" },
  { type: "AI Intent", icon: Sparkles, color: "purple" },
  { type: "Condition", icon: Layers, color: "orange" },
  { type: "Delay", icon: Clock, color: "yellow" },
  { type: "CRM Action", icon: Database, color: "blue" },
  { type: "Email", icon: Mail, color: "orange" },
  { type: "Notification", icon: Bell, color: "yellow" },
  { type: "Webhook", icon: Link2, color: "purple" },
  { type: "Analytics", icon: BarChart3, color: "green" },
];
