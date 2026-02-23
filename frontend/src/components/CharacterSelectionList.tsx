import React from 'react';
import { useWorkflow } from './WorkflowContext';
import { toast } from 'sonner';
import { ThumbnailImage } from './ui/image-display';

interface Character {
  id: number;
  name: string;
  image: string;
}

interface CharacterSelectionListProps {
  onClose: () => void;
}

export default function CharacterSelectionList({ onClose }: CharacterSelectionListProps) {
  const { addNode } = useWorkflow();
  
  const characters: Character[] = [
    {
      id: 1,
      name: '豆包妹妹',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A%20young%20Asian%20girl%20with%20short%20black%20hair%20and%20glasses,%20wearing%20a%20black%20crop%20top%20and%20light%20blue%20wide-leg%20pants,%20full%20body,%203D%20rendering,%20clean%20background&image_size=portrait_4_3'
    },
    {
      id: 2,
      name: '豆包妹妹',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A%20young%20Asian%20girl%20with%20short%20black%20hair%20and%20glasses,%20wearing%20a%20black%20crop%20top%20and%20light%20blue%20wide-leg%20pants,%20full%20body,%203D%20rendering,%20clean%20background&image_size=portrait_4_3'
    }
  ];

  const handleSelectCharacter = (character: Character) => {
    const id = `character-${Date.now()}`;
    const position = {
      x: window.innerWidth / 2 - 100 + Math.random() * 50,
      y: window.innerHeight / 2 - 50 + Math.random() * 50,
    };

    addNode({
      id,
      type: 'character',
      position,
      data: {
        label: character.name,
        characters: [character]
      },
    });

    toast.success(`已添加角色: ${character.name}`);
    onClose();
  };

  const handleCreateCharacter = () => {
    toast.success('创建角色功能开发中...');
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-8 z-50 bg-white border border-white/20 rounded-[16px] p-[7px] w-[220px]">
      {/* Header */}
      <div className="flex justify-center items-center gap-[10px] px-[8px] py-[4px] mb-[8px]">
        <h3 className="text-[12px] font-bold text-[rgba(28,28,28,0.4)]">角色</h3>
      </div>

      {/* Characters List */}
      <div className="flex flex-col gap-[8px] mb-[8px]">
        {characters.map((character) => (
          <div 
            key={character.id} 
            className="flex items-center gap-[4px] w-full"
            onClick={() => handleSelectCharacter(character)}
          >
            <div className="flex items-center gap-[6px] flex-1 bg-[rgba(0,0,0,0.04)] rounded-[30px] px-[10px] py-[4px] h-[32px]">
              <div className="size-[16px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.193 9.01709C11.3954 9.72434 12.2347 11.0064 12.3424 12.5005L12.3541 12.8267L12.3424 12.8501C12.3244 12.8784 12.2815 12.9288 12.192 12.9937C12.0075 13.1273 11.7012 13.2661 11.2701 13.3882C10.4161 13.6299 9.24026 13.7604 8.03674 13.7622C6.83275 13.764 5.65669 13.6368 4.80334 13.396C4.3727 13.2745 4.06718 13.1364 3.88342 13.0024C3.79438 12.9375 3.75236 12.8861 3.73401 12.8569C3.71904 12.8331 3.72034 12.8258 3.72034 12.8257C3.72047 11.1986 4.58929 9.78186 5.87463 9.02197C6.51558 9.37477 7.24932 9.57764 8.02991 9.57764C8.81347 9.5776 9.54964 9.37287 10.193 9.01709ZM8.02991 2.2417C9.50742 2.24182 10.7223 3.46157 10.7223 4.98877C10.7222 6.51482 9.50766 7.73377 8.02991 7.73389C6.55206 7.73389 5.3376 6.51489 5.33752 4.98877C5.33752 3.46219 6.5524 2.2417 8.02991 2.2417Z" stroke="currentColor" strokeWidth="1.27969" />
                </svg>
              </div>
              <span className="text-[12px] font-medium text-[#1C1C1C]">{character.name}</span>
            </div>
            <ThumbnailImage 
              src={character.image} 
              alt={character.name}
            />
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[rgba(28,28,28,0.05)] my-[8px] mx-[10px]"></div>

      {/* Create Character Button */}
      <div 
        className="flex items-center justify-center gap-[6px] bg-[rgba(0,0,0,0.03)] rounded-[15px] px-[10px] py-[4px] h-[32px] hover:bg-[rgba(0,0,0,0.05)] transition-colors cursor-pointer"
        onClick={handleCreateCharacter}
      >
        <span className="text-[12px] font-medium text-[rgba(28,28,28,0.4)]">创建角色</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
