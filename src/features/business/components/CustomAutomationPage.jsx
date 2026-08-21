import React, { useState } from "react";
import {
  Zap,
  Save,
  Play,
  Rocket,
  Plus,
  GripVertical,
  X,
  ArrowRight,
} from "lucide-react";
import { C, WA_GREEN, WA_DARK, PALETTE } from "../constants/businessData";
import { IconCircle } from "./UIPrimitives";

let blockUid = 100;
function makeBlock(paletteItem, label) {
  blockUid += 1;
  return {
    id: blockUid,
    type: paletteItem.type,
    icon: paletteItem.icon,
    color: paletteItem.color,
    label: label || paletteItem.type,
    required: true,
    description: "",
  };
}

export default function CustomAutomationPage({ toast }) {
  const [blocks, setBlocks] = useState([
    makeBlock(PALETTE[0], "Incoming WhatsApp Message"),
    makeBlock(PALETTE[4], "AI Intent Detection"),
    makeBlock(PALETTE[5], "Condition: If Lead"),
    makeBlock(PALETTE[2], "Capture Information"),
    makeBlock(PALETTE[7], "Score Lead"),
    makeBlock(PALETTE[7], "Send to CRM"),
    makeBlock(PALETTE[9], "Notify Sales"),
  ]);
  const [selectedId, setSelectedId] = useState(blocks[1]?.id);
  const [lastPicked, setLastPicked] = useState(PALETTE[1]);
  const selected = blocks.find((b) => b.id === selectedId) || null;

  const addFromPalette = (item) => {
    const nb = makeBlock(item);
    setBlocks((prev) => [...prev, nb]);
    setSelectedId(nb.id);
    setLastPicked(item);
  };

  const addStep = () => addFromPalette(lastPicked);

  const removeBlock = (id) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const updateSelected = (patch) => {
    setBlocks((prev) =>
      prev.map((b) => (b.id === selectedId ? { ...b, ...patch } : b))
    );
  };

  return (
    <div className="flex-1 min-w-0">
      <div className="px-8 pt-7 pb-5 flex items-start justify-between gap-6 flex-wrap">
        <div>
          <div
            className="text-[11px] font-bold tracking-wider mb-2"
            style={{ color: WA_DARK }}
          >
            WORKFLOW BUILDER
          </div>
          <h1 className="text-[26px] font-extrabold text-[#0F172A] leading-tight">
            Create Custom Automation
          </h1>
          <p className="text-[14px] text-[#64748B] mt-1.5 max-w-xl">
            Build your own automation using draggable blocks — no code required.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => toast("Automation saved as draft")}
            className="press-hover flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-[13px] font-semibold border border-[#E7ECF3] text-[#334155] bg-white cursor-pointer hover:bg-slate-50"
          >
            <Save size={14} /> Save Automation
          </button>
          <button
            onClick={() => toast("Running test conversation through your workflow…")}
            className="press-hover flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-[13px] font-semibold border border-[#E7ECF3] text-[#334155] bg-white cursor-pointer hover:bg-slate-50"
          >
            <Play size={14} /> Test Workflow
          </button>
          <button
            onClick={() => toast("Automation activated 🎉")}
            className="press-hover flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-[13px] font-semibold text-white cursor-pointer shadow-sm hover:shadow-md"
            style={{ background: WA_GREEN }}
          >
            <Rocket size={14} /> Activate Automation
          </button>
        </div>
      </div>

      <div className="px-8 pb-8 grid grid-cols-1 lg:grid-cols-[220px_1fr_260px] gap-6">
        <div className="border border-[#E7ECF3] rounded-xl p-3.5 h-fit bg-white shadow-2xs">
          <div className="text-[11px] font-bold tracking-wide text-[#94A3B8] mb-2 px-1">
            BLOCKS
          </div>
          <div className="flex flex-col gap-1">
            {PALETTE.map((p, i) => {
              const c = C[p.color] || C.blue;
              return (
                <button
                  key={i}
                  onClick={() => addFromPalette(p)}
                  className="press-hover flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] text-[#334155] hover:bg-[#F7F9FC] text-left cursor-pointer transition-colors"
                >
                  <div
                    style={{ background: c.bg }}
                    className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                  >
                    <p.icon size={13} style={{ color: c.text }} />
                  </div>
                  {p.type}
                </button>
              );
            })}
          </div>
        </div>

        <div className="border border-[#E7ECF3] rounded-xl p-6 bg-[#FAFBFD] min-w-0 shadow-2xs">
          <div className="flex items-center justify-between mb-5">
            <span className="text-[11px] font-bold tracking-wider text-[#334155]">
              WORKFLOW CANVAS
            </span>
            <button
              onClick={addStep}
              className="press-hover flex items-center gap-1 text-[12.5px] font-semibold cursor-pointer"
              style={{ color: WA_DARK }}
            >
              <Plus size={14} /> Add Step
            </button>
          </div>

          <div className="flex flex-col items-stretch">
            {blocks.map((b, i) => {
              const c = C[b.color] || C.blue;
              const isSel = b.id === selectedId;
              return (
                <React.Fragment key={b.id}>
                  <div
                    onClick={() => setSelectedId(b.id)}
                    className="group relative flex items-center gap-3 border rounded-xl px-4 py-3 bg-white text-left transition-all cursor-pointer hover:shadow-xs"
                    style={{
                      borderColor: isSel ? c.solid : "#E7ECF3",
                      boxShadow: isSel ? `0 0 0 3px ${c.ring}55` : "none",
                    }}
                  >
                    <GripVertical size={14} className="text-[#CBD5E1] flex-shrink-0" />
                    <IconCircle Icon={b.icon} color={b.color} size={34} />
                    <div className="min-w-0 flex-1">
                      <div className="text-[13.5px] font-semibold text-[#0F172A] truncate">
                        {b.label}
                      </div>
                      <div className="text-[11px] text-[#94A3B8]">{b.type}</div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeBlock(b.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 text-[#94A3B8] hover:text-[#EF4444] transition-opacity p-1 cursor-pointer"
                      title="Remove block"
                    >
                      <X size={15} />
                    </button>
                  </div>
                  {i < blocks.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowRight size={15} className="text-[#CBD5E1] rotate-90" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
            {blocks.length === 0 && (
              <div className="text-center py-16 text-[#94A3B8] text-sm">
                Add a block from the left to start building.
              </div>
            )}
          </div>
        </div>

        <div className="border border-[#E7ECF3] rounded-xl p-4 h-fit bg-white shadow-2xs">
          <div className="text-[11px] font-bold tracking-wide text-[#94A3B8] mb-3 px-1">
            CONFIGURATION
          </div>
          {selected ? (
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-2.5">
                <IconCircle Icon={selected.icon} color={selected.color} size={32} />
                <div>
                  <div className="text-[13px] font-bold text-[#0F172A]">{selected.type}</div>
                  <div className="text-[11px] text-[#94A3B8]">Block settings</div>
                </div>
              </div>
              <div>
                <label className="text-[11.5px] font-semibold text-[#334155] mb-1 block">
                  Step Name
                </label>
                <input
                  type="text"
                  value={selected.label}
                  onChange={(e) => updateSelected({ label: e.target.value })}
                  className="w-full border border-[#E7ECF3] rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": (C[selected.color] || C.blue).ring }}
                />
              </div>
              <div>
                <label className="text-[11.5px] font-semibold text-[#334155] mb-1 block">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={selected.description || ""}
                  onChange={(e) => updateSelected({ description: e.target.value })}
                  placeholder="What should this step do?"
                  className="w-full border border-[#E7ECF3] rounded-lg px-3 py-2 text-[13px] resize-none focus:outline-none focus:ring-2 focus:ring-slate-200"
                />
              </div>
              <label className="flex items-center justify-between text-[13px] text-[#334155] cursor-pointer">
                <span>Required step</span>
                <input
                  type="checkbox"
                  checked={selected.required}
                  onChange={(e) => updateSelected({ required: e.target.checked })}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
              </label>
              <button
                type="button"
                onClick={() => removeBlock(selected.id)}
                className="text-[12.5px] font-semibold text-[#EF4444] hover:text-red-700 text-left mt-1 cursor-pointer"
              >
                Remove block
              </button>
            </div>
          ) : (
            <div className="text-[13px] text-[#94A3B8] py-6 text-center">
              Select a block on the canvas to configure it.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
