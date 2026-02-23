import {
  Handle,
  Position,
  NodeProps,
  NodeResizer,
} from "@xyflow/react";
import { useState } from "react";
import { Plus } from "lucide-react";
import { useWorkflow } from "../WorkflowContext";
import { toast } from "sonner";
import { cn } from "../ui/utils";
import { useLanguage } from "../LanguageContext";

export default function CharacterNode({ data, id, selected }: NodeProps) {
  const { addAsset } = useWorkflow();
  const { t } = useLanguage();
  const [characters, setCharacters] = useState(data?.characters || [
    { id: 1, name: "豆包妹妹", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A%20young%20Asian%20girl%20with%20short%20black%20hair%20and%20glasses,%20wearing%20a%20black%20crop%20top%20and%20light%20blue%20wide-leg%20pants,%20full%20body,%203D%20rendering,%20clean%20background&image_size=portrait_4_3" },
    { id: 2, name: "豆包妹妹", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A%20young%20Asian%20girl%20with%20short%20black%20hair%20and%20glasses,%20wearing%20a%20black%20crop%20top%20and%20light%20blue%20wide-leg%20pants,%20full%20body,%203D%20rendering,%20clean%20background&image_size=portrait_4_3" },
    { id: 3, name: "豆包妹妹", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A%20young%20Asian%20girl%20with%20short%20black%20hair%20and%20glasses,%20wearing%20a%20black%20crop%20top%20and%20light%20blue%20wide-leg%20pants,%20full%20body,%203D%20rendering,%20clean%20background&image_size=portrait_4_3" },
  ]);

  const handleCreateCharacter = () => {
    toast.success("创建角色功能开发中...");
  };

  return (
    <>
      <NodeResizer 
        color="transparent" 
        handleClassName="opacity-0 hover:opacity-100 transition-opacity"
        handleStyle={{
            width: 8,
            height: 8,
            borderRadius: 2,
            border: "1px solid var(--primary)",
            backgroundColor: "var(--background)",
        }}
        lineStyle={{
            borderWidth: 1,
            borderColor: "var(--primary)",
            opacity: 0.5,
        }}
        isVisible={selected} 
        minWidth={240}
        minHeight={360}
      />
      <div 
        className={cn(
          "relative shrink-0 flex flex-col items-start rounded-[20px]",
          "box-border p-[4px]",
          "bg-white gap-[2px]"
        )}
        style={{ 
          width: 240, 
          height: 360,
          minWidth: 240,
          minHeight: 360,
          maxWidth: 240,
          maxHeight: 360
        }}
      >
        {/* Character Image with Thumbnails - component6 */}
        <div className={cn(
          "grow self-stretch rounded-[16px] overflow-hidden",
          "flex items-center"
        )}>
          {/* Main Character Image Container - frame: 232x317 */}
          <div 
            className="relative shrink-0 flex items-end overflow-hidden"
            style={{ 
              width: 232, 
              height: 317
            }}
          >
            {/* Background Image - contain, center like Figma design */}
            {characters[0] && (
              <img 
                src={characters[0].image}
                alt={characters[0].name}
                className="absolute top-0 left-0 !w-full !h-full object-contain"
              />
            )}
            {/* Character Selection Thumbnails */}
            <div className="relative z-10 flex items-end gap-[4px] pb-[3px] pl-[4px]">
              {characters.map((character, index) => (
                <div 
                  key={character.id} 
                  className={cn(
                    "shrink-0 w-[40px] h-[40px] rounded-[12px]",
                    "flex items-center justify-center",
                    index === 0 ? "border border-white p-[3px]" : "p-[4px]"
                  )}
                >
                  <img 
                    src={character.image} 
                    alt={character.name} 
                    className="w-[34px] h-[34px] object-cover rounded-[8px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Character Info - container2 */}
        <div className={cn(
          "shrink-0 self-stretch flex items-end gap-[4px]",
          "px-[8px] py-[4px]"
        )}>
          {/* container: flex-grow, height 25px */}
          <div className={cn(
            "grow flex items-center gap-[8px] h-[25px] overflow-hidden"
          )}>
            {/* frame2: 20x20 icon */}
            <div className="shrink-0 size-[20px] overflow-hidden">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7412 11.2714C14.2442 12.1554 15.2933 13.758 15.428 15.6256L15.4427 16.0334L15.428 16.0626C15.4055 16.1005 15.3519 16.161 15.2399 16.2421C14.9943 16.3966 14.614 16.5577 14.1001 16.6853C12.9951 16.9561 11.5503 17.1255 10.0459 17.128C8.54133 17.1306 7.09623 16.9634 6.0013 16.6939C5.46588 16.5721 5.08397 16.438 4.85428 16.303C4.73264 16.2426 4.68152 16.1608 4.65956 16.1011C4.6407 16.064 4.64234 16.0547 4.64234 16.0546C4.64251 13.9982 5.73661 12.2273 7.34329 11.2775C8.14447 11.7185 9.06165 11.9721 10.0374 11.9721C11.0151 11.9721 11.9342 11.7185 12.7412 11.2714ZM10.0374 2.80213C11.8843 2.80227 13.3779 4.32696 13.3779 6.23596C13.3777 8.14345 11.8844 9.66721 10.0374 9.66737C8.19045 9.66737 6.69675 8.1436 6.69665 6.23596C6.69665 4.32837 8.19053 2.80213 10.0374 2.80213Z" stroke="currentColor" strokeWidth="1.59962" />
              </svg>
            </div>
            {/* imageInput: name text */}
            <div className="shrink-0 text-[13px] font-semibold leading-[22px] tracking-[-0.21px] text-foreground">
              {characters[0]?.name}
            </div>
          </div>
          {/* text: "角色" label */}
          <div className="shrink-0 text-[14px] font-normal leading-[22px] tracking-[-0.21px] text-muted-foreground">
            {t('character')}
          </div>
        </div>

        {/* Vertical Divider Lines */}
        <div className="absolute top-[139px] right-[-1px] w-[1px] h-[80px] bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-[149px] right-[-3px] z-[2] w-[2px] h-[60px] bg-gradient-to-b from-transparent via-white to-transparent" />

        {/* Output Handle */}
        <Handle
          type="source"
          position={Position.Right}
          className="!w-[12px] !h-[12px] !bg-[#00E424] !border-[2px] !border-white !right-[-25px] !rounded-full"
        />

        {/* Input Handle */}
        <Handle
          type="target"
          position={Position.Left}
          className="!w-[12px] !h-[12px] !bg-primary !border-[2px] !border-white !left-[-25px] !rounded-full"
        />

        <NodeResizer color="var(--primary)" lineWidth={2} isVisible={false} />
      </div>
    </>
  );
}
